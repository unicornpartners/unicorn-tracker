const should = require('should');
const assert = require('assert');
const sinon = require('sinon');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const util = require('../testlib/test-util');
const testEvents = require('../testlib/test-events');

const UnicornTracker = require('../functions/unicorn-tracker');
const postMessageSpy = sinon.stub().returns(Promise.resolve());
const slackSender = {
  postMessage: postMessageSpy
}

const UNICORN_TABLE = 'TestUnicornTracking';

const unicornTracker = new UnicornTracker({
  docClient: docClient,
  slackSender: slackSender,
  slackChannel: 'channel',
  trackingDomain: 'unicorntracker.com',
  unicornTable: UNICORN_TABLE
})

describe("SES Handler", function(){
  beforeEach(function() {
    return util.deleteAll(UNICORN_TABLE);
  });
  beforeEach(function() {
    postMessageSpy.reset();
  });
  describe("Basic unicorn email", function() {
    it("should notify slack", function() {
      return unicornTracker.handle(testEvents.basic)
        .then(function() {
          assert(postMessageSpy.calledOnce);
          const postedMessage = postMessageSpy.getCall(0).args[0];
          const attachment = postedMessage.attachments[0];
          assert.equal(attachment.title, 'attacker just got victim');
          assert.equal(attachment.text, 'This is the 1st time attacker has unicorned victim.');

          const attackerField = attachment.fields[0];
          assert.equal(attackerField.title, 'All-time by attacker');
          assert.equal(attackerField.value, '1');

          const victimField = attachment.fields[1];
          assert.equal(victimField.title, 'All-time against victim');
          assert.equal(victimField.value, '1');
        });
    });

    it("should work with all amazon domains", function() {
        return unicornTracker.handle(testEvents.ukVictim)
          .then(function() {
            assert(postMessageSpy.calledOnce);
            const postedMessage = postMessageSpy.getCall(0).args[0];
            const attachment = postedMessage.attachments[0];
            assert.equal(attachment.title, 'attacker just got victim');
            assert.equal(attachment.text, 'This is the 1st time attacker has unicorned victim.');

            const attackerField = attachment.fields[0];
            assert.equal(attackerField.title, 'All-time by attacker');
            assert.equal(attackerField.value, '1');

            const victimField = attachment.fields[1];
            assert.equal(victimField.title, 'All-time against victim');
            assert.equal(victimField.value, '1');
          });
    });
  });

  describe("Multiple attacks", function() {
    it("should notify slack with updated counts", function() {
      return unicornTracker.handle(testEvents.basic)
        .then(function() {
          return unicornTracker.handle(testEvents.basic);
        })
        .then(function() {
          assert(postMessageSpy.calledTwice, "Post message not called twice");
          const postedMessage = postMessageSpy.secondCall.args[0];
          const attachment = postedMessage.attachments[0];
          assert.equal(attachment.title, 'attacker just got victim');
          assert.equal(attachment.text, 'This is the 2nd time attacker has unicorned victim.');

          const attackerField = attachment.fields[0];
          assert.equal(attackerField.title, 'All-time by attacker');
          assert.equal(attackerField.value, '2');

          const victimField = attachment.fields[1];
          assert.equal(victimField.title, 'All-time against victim');
          assert.equal(victimField.value, '2');
        });
    });
  });

  describe("Ignored emails", function(){
    it("should ignore emails from external domains", function() {
      return unicornTracker.handle(testEvents.externalVictim)
        .then(function() {
          assert(postMessageSpy.notCalled, "Post message was called, should have dropped");
        });
    });

    it("should ignore emails sent to unexpected tracking domains", function() {
      return unicornTracker.handle(testEvents.badTrackingDomain)
        .then(function() {
          assert(postMessageSpy.notCalled, "Post message was called, should have dropped");
        });
    });

    it("should ignore emails with subjects that start with Re:", function() {
      return unicornTracker.handle(testEvents.subjectReply)
        .then(function() {
          assert(postMessageSpy.notCalled, "Post message was called, should have dropped");
        });
    });

    it("should ignore emails with an In-Reply-To header", function() {
      return unicornTracker.handle(testEvents.inReplyTo)
        .then(function() {
          assert(postMessageSpy.notCalled, "Post message was called, should have dropped");
        });
    });

    it("should ignore emails with a References header", function() {
      return unicornTracker.handle(testEvents.referencesReply)
        .then(function() {
          assert(postMessageSpy.notCalled, "Post message was called, should have dropped");
        });
    });
  });
});
