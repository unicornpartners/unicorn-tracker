'use strict';

var url = require('url');
var https = require('https');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const UnicornTracker = require('unicorn-tracker');
const SlackSender = require('slack-sender');

const UNICORN_TABLE = process.env.UNICORN_TABLE;

const RECIPIENT_DOMAIN = process.env.RECIPIENT_DOMAIN;
const SLACK_HOOK = process.env.SLACK_HOOK_URL;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL;

const unicornTracker = new UnicornTracker({
  docClient: docClient,
  slackSender: new SlackSender(SLACK_HOOK),
  slackChannel: SLACK_CHANNEL,
  trackingDomain: RECIPIENT_DOMAIN,
  unicornTable: UNICORN_TABLE
})

exports.handler = (event, context) => {
    console.log('Received Event: ' + JSON.stringify(event, null, 2));
    unicornTracker.handle(event);
};
