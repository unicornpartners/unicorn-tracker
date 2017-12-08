'use strict';

const USERNAME = "Unicorn Tracker",
      ICON_EMOJI = ":unicorn_face:",
      ATTACHMENT_COLOR = "#f400af";


module.exports = function(slackSender, channel, trackingDomain) {
  this.sendUnicornMessage = function(params) {
    return slackSender.postMessage({
      "channel": channel,
    	"username": USERNAME,
    	"icon_emoji": ICON_EMOJI,
        "attachments": [
            {
                "fallback": `${params.attacker} just unicorned ${params.victim}!`,
                "color": ATTACHMENT_COLOR,
                "title": `${params.attacker} just got ${params.victim}`,
                "text": `This is the ${toOrdinal(params.count)} time ${params.attacker} has unicorned ${params.victim}.`,
                "fields": [
                    {
                        "title": `All-time by ${params.attacker}`,
                        "value": params.totalAttacks,
                        "short": true
                    },

                    {
                        "title": `All-time against ${params.victim}`,
                        "value": params.totalVictimizations,
                        "short": true
                    }
                ],
                "footer": `cc <your_alias>@${trackingDomain} to start tracking your unicorns!`,
                "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png"
            }
        ]
    });
  }
}

function toOrdinal(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
