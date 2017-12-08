'use strict';

const UnicornSender = require('./unicorn-sender');

const ADDRESS_PATTERN = /([a-zA-Z0-9!#$%&'*+-/?^_`{|}~]+)@([a-zA-Z0-9-.]+)/;

module.exports = function UnicornTracker(params) {
  const unicornSender = new UnicornSender(params.slackSender, params.slackChannel, params.trackingDomain),
        docClient = params.docClient,
        UNICORN_TABLE = params.unicornTable;

  this.handle = function(event) {
    let unicornEmail;
    try {
      unicornEmail = new UnicornEmail(event.Records[0].ses);

      if(unicornEmail.isReply()) {
        console.warn('REPLY MESSAGE: ignoring');
        return Promise.resolve();
      }
      if(!validateVictimAddress(unicornEmail.victimAddress)) {
        console.warn(`EXTERNAL VICTIM: ${unicornEmail.victimAddress.address}`);
        return Promise.resolve();
      }
      if(!validateTrackingAddress(unicornEmail.trackingAddress)) {
        console.warn(`INVALID TRACKING DOMAIN: tracking email sent to unexpected domain: ${unicornEmail.trackingAddress.address}, expected ${params.trackingDomain}`);
        return Promise.resolve();
      }
    } catch(error) {
      console.error(`INVAILD INPUT: error while parsing and validating input event: ${error.stack}`);
      return Promise.resolve();
    }

    const victim = unicornEmail.victimAddress.local;
    const attacker = unicornEmail.trackingAddress.local;

    return handleAttack(attacker, victim);
  }

  function handleAttack(attacker, victim) {
      console.log(`${attacker} unicorned ${victim}`);
      return updateUnicornTable(attacker, victim)
        .then(data => {
          const attackerHistory = data[0];
          const victimHistory = data[1];

          console.log('attackerHistory: ' + JSON.stringify(attackerHistory.Attributes));
          const count = attackerHistory.Attributes.Attacks[victim];
          let totalAttacks = 0;
          let totalVictimizations = 0;
          let key;
          for(key in attackerHistory.Attributes.Attacks) {
            totalAttacks = totalAttacks + attackerHistory.Attributes.Attacks[key];
          }

          for(key in victimHistory.Attributes.Victimizations) {
            totalVictimizations = totalVictimizations + victimHistory.Attributes.Victimizations[key];
          }

          console.log("Posting message to Slack");
          return unicornSender.sendUnicornMessage({
            attacker: attacker,
            victim: victim,
            count: count,
            totalAttacks: totalAttacks,
            totalVictimizations: totalVictimizations
          });
        });
  }

  function updateUnicornTable(attacker, victim) {
      const attackerUpdate = {
        TableName: UNICORN_TABLE,
        Key: { Alias : attacker },
        UpdateExpression: 'ADD #attacks.#victim :one',
        ExpressionAttributeNames: {'#attacks' : "Attacks", '#victim': victim},
        ExpressionAttributeValues: {':one': 1},
        ConditionExpression: 'attribute_exists(Alias)',
        ReturnValues: "ALL_NEW"
      };

      const victimUpdate = {
        TableName: UNICORN_TABLE,
        Key: { Alias : victim },
        UpdateExpression: 'ADD #victimizations.#attacker :one',
        ExpressionAttributeNames: {'#victimizations' : "Victimizations", '#attacker': attacker},
        ExpressionAttributeValues: {':one': 1},
        ConditionExpression: 'attribute_exists(Alias)',
        ReturnValues: "ALL_NEW"
      }

      function conditionFailedHandler(alias, attacks, victimizations) {
        return function(err) {
          if(err.code !== 'ConditionalCheckFailedException') {
            throw err;
          }

          const item =  {
            Alias: alias,
            Attacks: attacks,
            Victimizations: victimizations
          };
          return docClient.put({
            TableName: UNICORN_TABLE,
            Item: item
          }).promise().then(data => {
            return {
              Attributes: item
            }
          });
        }
      }

      const attacks = {};
      attacks[victim] = 1;
      const attackerResult = docClient.update(attackerUpdate).promise()
        .catch(conditionFailedHandler(attacker, attacks, {}));

      const victimizations = {};
      victimizations[attacker] = 1;
      const victimResult = docClient.update(victimUpdate).promise()
        .catch(conditionFailedHandler(victim, {}, victimizations));

      return Promise.all([attackerResult, victimResult]);
  }

  function validateVictimAddress(address) {
    return address.domain.startsWith('amazon.');
  }

  function validateTrackingAddress(address) {
    return address.domain === params.trackingDomain;
  }


  function UnicornEmail(sesNotification) {
    const mail = sesNotification.mail;
    const receipt = sesNotification.receipt;

    this.victimAddress = parseAddress(mail.source);
    this.trackingAddress = parseAddress(receipt.recipients[0]);

    this.isReply = function isReply() {
      const subject = mail.commonHeaders.subject;
      let result = false;
      if(subject && subject.match(/^re:\s/i)) {
          result = true;
      }
      mail.headers.forEach(header => {
          if(header.name === 'In-Reply-To' || header.name === 'References') {
              result = true;
          }
      });
      return result;
    }
  }

  function parseAddress(emailAddress) {
    let match = emailAddress.match(ADDRESS_PATTERN);
    if(!match) {
      throw new Error("invalid email address: " + emailAddress);
    }
    return {
      address: match[0],
      local: match[1],
      domain: match[2]
    }
  }

  function isReply(mail) {
      const subject = mail.commonHeaders.subject;
      let result = false;
      if(subject && subject.match(/^re:\s/i)) {
          result = true;
      }
      mail.headers.forEach(header => {
          if(header.name === 'In-Reply-To' || header.name === 'References') {
              result = true;
          }
      });
      return result;
  }
}
