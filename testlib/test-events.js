module.exports = {
  "basic": {
    "Records": [
      {
        "eventSource": "aws:ses",
        "eventVersion": "1.0",
        "ses": {
          "mail": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "source": "prvs=093bd89e2=victim@amazon.com",
            "messageId": "un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81",
            "destination": [
              "mailinglist@amazon.com"
            ],
            "headersTruncated": false,
            "headers": [
              {
                "name": "Return-Path",
                "value": "<prvs=093bd89e2=victim@amazon.com>"
              },
              {
                "name": "Received",
                "value": "from smtp-fw-9102.amazon.com (smtp-fw-9102.amazon.com [207.171.184.29]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81 for tester@awsunicorns.com; Wed, 19 Oct 2016 23:44:27 +0000 (UTC)"
              },
              {
                "name": "X-SES-Spam-Verdict",
                "value": "PASS"
              },
              {
                "name": "X-SES-Virus-Verdict",
                "value": "PASS"
              },
              {
                "name": "Received-SPF",
                "value": "pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com;"
              },
              {
                "name": "Authentication-Results",
                "value": "amazonses.com; spf=pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com; dkim=pass header.i=@amazon.com;"
              },
              {
                "name": "X-SES-RECEIPT",
                "value": "AEFBQUFBQUFBQUFGb1NtNmpGaUJueEJVKzNONUdSVXBQNmpGZ001SEtFT09SaUtPZGxZQXN4cXE1R1VlL1JYdEx4TVEydjJpdGJGTG9mU09oTGxMVk1iZHpyT2xGT0RDeTFYeXBRUXg5aUdjZTZDcmsrTXpWYzY2bVVtR0dlUU1hM0xHMmNUdUJwd1RXK0VMWC93MlBFTUl3dkFhRWNsTklhckJCamVuRDdzYUE4Z3EwQ2YvTkdYSHVkR253RmJXcGNBU2w2K2I0WjVkWGNCTmJPd2pJT3JVeDdLSGkzMzBiV3orV213QmIvbERaV0VRZnB3VjZ2OGJ0MTBHZFlNSWNjWVhDZ2NUMEZvRUNPdXkzNjV1UnY3YXdmVnNRT3hmRjQyWTlyWTBIVnJlcU1FTC90ajhxZlE9PQ=="
              },
              {
                "name": "X-SES-DKIM-SIGNATURE",
                "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw; d=amazonses.com; t=1476920663; h=X-SES-RECEIPT:From:To:Subject:Date:Message-ID:Content-Type:MIME-Version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=KLrH+YOyo7tu5b9//+Bz6oSVE81ytRUrfCgb3GrRUnafE89lPEMt1ZIF5pvi8Xbo 8iBuAprZANAqqOrZs+mmcXhmkK/3U4VTabxled162S66P697fqXz0Sd90uN5ESQtqr5 gzUY8ASBvqxT903fV5VlNKkZvRHGM3+YqTz2JIKs="
              },
              {
                "name": "DKIM-Signature",
                "value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=amazon.com; i=@amazon.com; q=dns/txt; s=amazon201209; t=1476920667; x=1508456667; h=from:to:subject:date:message-id:mime-version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=JyJJC2fs9WO8knqCz96jYZKgcD/Yg6IkG5f4psiCpuMYMz8p8/dS47hxwXsgHzpqjOjRP4tSoz5W2abvUIgix3ZpFArYKWUYIB3Y6lHUTFsg5nDC1mpjwGnHmGw9YfNz7n10fk4iWKD1Ifg3Iw/MBEqRzLOQQYXQkzdqH+XlbAM=;"
              },
              {
                "name": "X-IronPort-AV",
                "value": "E=Sophos;i=\"5.31,516,1473120000\";  d=\"scan'208,217\";a=\"517075527\""
              },
              {
                "name": "Received",
                "value": "from sea3-co-svc-lb6-vlan2.sea.amazon.com (HELO email-inbound-relay-60012.pdx1.amazon.com) ([10.47.22.34]) by smtp-border-fw-out-9102.sea19.amazon.com with ESMTP/TLS/DHE-RSA-AES256-SHA; 19 Oct 2016 23:44:25 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13MTAUWC001.ant.amazon.com (pdx1-ws-svc-p6-lb9-vlan2.pdx.amazon.com [10.236.137.194]) by email-inbound-relay-60012.pdx1.amazon.com (8.14.7/8.14.7) with ESMTP id u9JNiOfP001092 (version=TLSv1/SSLv3 cipher=AES256-SHA bits=256 verify=OK) for <tester@awsunicorns.com>; Wed, 19 Oct 2016 23:44:24 GMT"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13MTAUWC001.ant.amazon.com (10.43.162.135) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:24 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13D08UWC004.ant.amazon.com (10.43.162.90) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com ([10.43.162.90]) by EX13D08UWC004.ant.amazon.com ([10.43.162.90]) with mapi id 15.00.1104.000; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "From",
                "value": "victim@amazon.com"
              },
              {
                "name": "To",
                "value": "\"mailinglist@amazon.com\""
              },
              {
                "name": "Subject",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Topic",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Index",
                "value": "AQHSKmK4qW8ansOh10CBrwu9MP+7wA=="
              },
              {
                "name": "Date",
                "value": "Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Message-ID",
                "value": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>"
              },
              {
                "name": "Accept-Language",
                "value": "en-US"
              },
              {
                "name": "Content-Language",
                "value": "en-US"
              },
              {
                "name": "X-MS-Has-Attach",
                "value": ""
              },
              {
                "name": "X-MS-TNEF-Correlator",
                "value": ""
              },
              {
                "name": "x-ms-exchange-messagesentrepresentingtype",
                "value": "1"
              },
              {
                "name": "x-ms-exchange-transport-fromentityheader",
                "value": "Hosted"
              },
              {
                "name": "x-originating-ip",
                "value": "[10.43.160.91]"
              },
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"_000_61D9C1210FF34C56A2EA4AD15D1804F7amazoncom_\""
              },
              {
                "name": "MIME-Version",
                "value": "1.0"
              },
              {
                "name": "Precedence",
                "value": "Bulk"
              }
            ],
            "commonHeaders": {
              "returnPath": "prvs=093bd89e2=victim@amazon.com",
              "from": [
                "\"Deck, Mike\" <victim@amazon.com>"
              ],
              "date": "Wed, 19 Oct 2016 23:44:23 +0000",
              "to": [
                "\"mailinglist@amazon.com\""
              ],
              "messageId": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>",
              "subject": "Unicorns"
            }
          },
          "receipt": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "processingTimeMillis": 521,
            "recipients": [
              "attacker@unicorntracker.com"
            ],
            "spamVerdict": {
              "status": "PASS"
            },
            "virusVerdict": {
              "status": "PASS"
            },
            "spfVerdict": {
              "status": "PASS"
            },
            "dkimVerdict": {
              "status": "GRAY"
            },
            "action": {
              "type": "Lambda",
              "functionArn": "arn:aws:lambda:us-east-1:408587083461:function:SesUnicornTracker",
              "invocationType": "Event"
            }
          }
        }
      }
    ]
  },

  "ukVictim": {
    "Records": [
      {
        "eventSource": "aws:ses",
        "eventVersion": "1.0",
        "ses": {
          "mail": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "source": "prvs=093bd89e2=victim@amazon.co.uk",
            "messageId": "un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81",
            "destination": [
              "mailinglist@amazon.com"
            ],
            "headersTruncated": false,
            "headers": [
              {
                "name": "Return-Path",
                "value": "<prvs=093bd89e2=victim@amazon.co.uk>"
              },
              {
                "name": "Received",
                "value": "from smtp-fw-9102.amazon.com (smtp-fw-9102.amazon.com [207.171.184.29]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81 for tester@awsunicorns.com; Wed, 19 Oct 2016 23:44:27 +0000 (UTC)"
              },
              {
                "name": "X-SES-Spam-Verdict",
                "value": "PASS"
              },
              {
                "name": "X-SES-Virus-Verdict",
                "value": "PASS"
              },
              {
                "name": "Received-SPF",
                "value": "pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.co.uk; helo=smtp-fw-9102.amazon.com;"
              },
              {
                "name": "Authentication-Results",
                "value": "amazonses.com; spf=pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.co.uk; helo=smtp-fw-9102.amazon.com; dkim=pass header.i=@amazon.com;"
              },
              {
                "name": "X-SES-RECEIPT",
                "value": "AEFBQUFBQUFBQUFGb1NtNmpGaUJueEJVKzNONUdSVXBQNmpGZ001SEtFT09SaUtPZGxZQXN4cXE1R1VlL1JYdEx4TVEydjJpdGJGTG9mU09oTGxMVk1iZHpyT2xGT0RDeTFYeXBRUXg5aUdjZTZDcmsrTXpWYzY2bVVtR0dlUU1hM0xHMmNUdUJwd1RXK0VMWC93MlBFTUl3dkFhRWNsTklhckJCamVuRDdzYUE4Z3EwQ2YvTkdYSHVkR253RmJXcGNBU2w2K2I0WjVkWGNCTmJPd2pJT3JVeDdLSGkzMzBiV3orV213QmIvbERaV0VRZnB3VjZ2OGJ0MTBHZFlNSWNjWVhDZ2NUMEZvRUNPdXkzNjV1UnY3YXdmVnNRT3hmRjQyWTlyWTBIVnJlcU1FTC90ajhxZlE9PQ=="
              },
              {
                "name": "X-SES-DKIM-SIGNATURE",
                "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw; d=amazonses.com; t=1476920663; h=X-SES-RECEIPT:From:To:Subject:Date:Message-ID:Content-Type:MIME-Version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=KLrH+YOyo7tu5b9//+Bz6oSVE81ytRUrfCgb3GrRUnafE89lPEMt1ZIF5pvi8Xbo 8iBuAprZANAqqOrZs+mmcXhmkK/3U4VTabxled162S66P697fqXz0Sd90uN5ESQtqr5 gzUY8ASBvqxT903fV5VlNKkZvRHGM3+YqTz2JIKs="
              },
              {
                "name": "DKIM-Signature",
                "value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=amazon.com; i=@amazon.com; q=dns/txt; s=amazon201209; t=1476920667; x=1508456667; h=from:to:subject:date:message-id:mime-version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=JyJJC2fs9WO8knqCz96jYZKgcD/Yg6IkG5f4psiCpuMYMz8p8/dS47hxwXsgHzpqjOjRP4tSoz5W2abvUIgix3ZpFArYKWUYIB3Y6lHUTFsg5nDC1mpjwGnHmGw9YfNz7n10fk4iWKD1Ifg3Iw/MBEqRzLOQQYXQkzdqH+XlbAM=;"
              },
              {
                "name": "X-IronPort-AV",
                "value": "E=Sophos;i=\"5.31,516,1473120000\";  d=\"scan'208,217\";a=\"517075527\""
              },
              {
                "name": "Received",
                "value": "from sea3-co-svc-lb6-vlan2.sea.amazon.com (HELO email-inbound-relay-60012.pdx1.amazon.com) ([10.47.22.34]) by smtp-border-fw-out-9102.sea19.amazon.com with ESMTP/TLS/DHE-RSA-AES256-SHA; 19 Oct 2016 23:44:25 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13MTAUWC001.ant.amazon.com (pdx1-ws-svc-p6-lb9-vlan2.pdx.amazon.com [10.236.137.194]) by email-inbound-relay-60012.pdx1.amazon.com (8.14.7/8.14.7) with ESMTP id u9JNiOfP001092 (version=TLSv1/SSLv3 cipher=AES256-SHA bits=256 verify=OK) for <tester@awsunicorns.com>; Wed, 19 Oct 2016 23:44:24 GMT"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13MTAUWC001.ant.amazon.com (10.43.162.135) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:24 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13D08UWC004.ant.amazon.com (10.43.162.90) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com ([10.43.162.90]) by EX13D08UWC004.ant.amazon.com ([10.43.162.90]) with mapi id 15.00.1104.000; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "From",
                "value": "victim@amazon.co.uk"
              },
              {
                "name": "To",
                "value": "\"mailinglist@amazon.com\""
              },
              {
                "name": "Subject",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Topic",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Index",
                "value": "AQHSKmK4qW8ansOh10CBrwu9MP+7wA=="
              },
              {
                "name": "Date",
                "value": "Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Message-ID",
                "value": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>"
              },
              {
                "name": "Accept-Language",
                "value": "en-US"
              },
              {
                "name": "Content-Language",
                "value": "en-US"
              },
              {
                "name": "X-MS-Has-Attach",
                "value": ""
              },
              {
                "name": "X-MS-TNEF-Correlator",
                "value": ""
              },
              {
                "name": "x-ms-exchange-messagesentrepresentingtype",
                "value": "1"
              },
              {
                "name": "x-ms-exchange-transport-fromentityheader",
                "value": "Hosted"
              },
              {
                "name": "x-originating-ip",
                "value": "[10.43.160.91]"
              },
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"_000_61D9C1210FF34C56A2EA4AD15D1804F7amazoncom_\""
              },
              {
                "name": "MIME-Version",
                "value": "1.0"
              },
              {
                "name": "Precedence",
                "value": "Bulk"
              }
            ],
            "commonHeaders": {
              "returnPath": "prvs=093bd89e2=victim@amazon.co.uk",
              "from": [
                "\"Deck, Mike\" <victim@amazon.co.uk>"
              ],
              "date": "Wed, 19 Oct 2016 23:44:23 +0000",
              "to": [
                "\"mailinglist@amazon.com\""
              ],
              "messageId": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>",
              "subject": "Unicorns"
            }
          },
          "receipt": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "processingTimeMillis": 521,
            "recipients": [
              "attacker@unicorntracker.com"
            ],
            "spamVerdict": {
              "status": "PASS"
            },
            "virusVerdict": {
              "status": "PASS"
            },
            "spfVerdict": {
              "status": "PASS"
            },
            "dkimVerdict": {
              "status": "GRAY"
            },
            "action": {
              "type": "Lambda",
              "functionArn": "arn:aws:lambda:us-east-1:408587083461:function:SesUnicornTracker",
              "invocationType": "Event"
            }
          }
        }
      }
    ]
  },

  "externalVictim": {
    "Records": [
      {
        "eventSource": "aws:ses",
        "eventVersion": "1.0",
        "ses": {
          "mail": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "source": "prvs=093bd89e2=victim@microsoft.com",
            "messageId": "un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81",
            "destination": [
              "mailinglist@amazon.com"
            ],
            "headersTruncated": false,
            "headers": [
              {
                "name": "Return-Path",
                "value": "<prvs=093bd89e2=victim@microsoft.com>"
              },
              {
                "name": "Received",
                "value": "from smtp-fw-9102.amazon.com (smtp-fw-9102.amazon.com [207.171.184.29]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81 for tester@awsunicorns.com; Wed, 19 Oct 2016 23:44:27 +0000 (UTC)"
              },
              {
                "name": "X-SES-Spam-Verdict",
                "value": "PASS"
              },
              {
                "name": "X-SES-Virus-Verdict",
                "value": "PASS"
              },
              {
                "name": "Received-SPF",
                "value": "pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@microsoft.com; helo=smtp-fw-9102.amazon.com;"
              },
              {
                "name": "Authentication-Results",
                "value": "amazonses.com; spf=pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@microsoft.com; helo=smtp-fw-9102.amazon.com; dkim=pass header.i=@amazon.com;"
              },
              {
                "name": "X-SES-RECEIPT",
                "value": "AEFBQUFBQUFBQUFGb1NtNmpGaUJueEJVKzNONUdSVXBQNmpGZ001SEtFT09SaUtPZGxZQXN4cXE1R1VlL1JYdEx4TVEydjJpdGJGTG9mU09oTGxMVk1iZHpyT2xGT0RDeTFYeXBRUXg5aUdjZTZDcmsrTXpWYzY2bVVtR0dlUU1hM0xHMmNUdUJwd1RXK0VMWC93MlBFTUl3dkFhRWNsTklhckJCamVuRDdzYUE4Z3EwQ2YvTkdYSHVkR253RmJXcGNBU2w2K2I0WjVkWGNCTmJPd2pJT3JVeDdLSGkzMzBiV3orV213QmIvbERaV0VRZnB3VjZ2OGJ0MTBHZFlNSWNjWVhDZ2NUMEZvRUNPdXkzNjV1UnY3YXdmVnNRT3hmRjQyWTlyWTBIVnJlcU1FTC90ajhxZlE9PQ=="
              },
              {
                "name": "X-SES-DKIM-SIGNATURE",
                "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw; d=amazonses.com; t=1476920663; h=X-SES-RECEIPT:From:To:Subject:Date:Message-ID:Content-Type:MIME-Version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=KLrH+YOyo7tu5b9//+Bz6oSVE81ytRUrfCgb3GrRUnafE89lPEMt1ZIF5pvi8Xbo 8iBuAprZANAqqOrZs+mmcXhmkK/3U4VTabxled162S66P697fqXz0Sd90uN5ESQtqr5 gzUY8ASBvqxT903fV5VlNKkZvRHGM3+YqTz2JIKs="
              },
              {
                "name": "DKIM-Signature",
                "value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=amazon.com; i=@amazon.com; q=dns/txt; s=amazon201209; t=1476920667; x=1508456667; h=from:to:subject:date:message-id:mime-version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=JyJJC2fs9WO8knqCz96jYZKgcD/Yg6IkG5f4psiCpuMYMz8p8/dS47hxwXsgHzpqjOjRP4tSoz5W2abvUIgix3ZpFArYKWUYIB3Y6lHUTFsg5nDC1mpjwGnHmGw9YfNz7n10fk4iWKD1Ifg3Iw/MBEqRzLOQQYXQkzdqH+XlbAM=;"
              },
              {
                "name": "X-IronPort-AV",
                "value": "E=Sophos;i=\"5.31,516,1473120000\";  d=\"scan'208,217\";a=\"517075527\""
              },
              {
                "name": "Received",
                "value": "from sea3-co-svc-lb6-vlan2.sea.amazon.com (HELO email-inbound-relay-60012.pdx1.amazon.com) ([10.47.22.34]) by smtp-border-fw-out-9102.sea19.amazon.com with ESMTP/TLS/DHE-RSA-AES256-SHA; 19 Oct 2016 23:44:25 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13MTAUWC001.ant.amazon.com (pdx1-ws-svc-p6-lb9-vlan2.pdx.amazon.com [10.236.137.194]) by email-inbound-relay-60012.pdx1.amazon.com (8.14.7/8.14.7) with ESMTP id u9JNiOfP001092 (version=TLSv1/SSLv3 cipher=AES256-SHA bits=256 verify=OK) for <tester@awsunicorns.com>; Wed, 19 Oct 2016 23:44:24 GMT"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13MTAUWC001.ant.amazon.com (10.43.162.135) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:24 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13D08UWC004.ant.amazon.com (10.43.162.90) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com ([10.43.162.90]) by EX13D08UWC004.ant.amazon.com ([10.43.162.90]) with mapi id 15.00.1104.000; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "From",
                "value": "victim@microsoft.com"
              },
              {
                "name": "To",
                "value": "\"mailinglist@amazon.com\""
              },
              {
                "name": "Subject",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Topic",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Index",
                "value": "AQHSKmK4qW8ansOh10CBrwu9MP+7wA=="
              },
              {
                "name": "Date",
                "value": "Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Message-ID",
                "value": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>"
              },
              {
                "name": "Accept-Language",
                "value": "en-US"
              },
              {
                "name": "Content-Language",
                "value": "en-US"
              },
              {
                "name": "X-MS-Has-Attach",
                "value": ""
              },
              {
                "name": "X-MS-TNEF-Correlator",
                "value": ""
              },
              {
                "name": "x-ms-exchange-messagesentrepresentingtype",
                "value": "1"
              },
              {
                "name": "x-ms-exchange-transport-fromentityheader",
                "value": "Hosted"
              },
              {
                "name": "x-originating-ip",
                "value": "[10.43.160.91]"
              },
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"_000_61D9C1210FF34C56A2EA4AD15D1804F7amazoncom_\""
              },
              {
                "name": "MIME-Version",
                "value": "1.0"
              },
              {
                "name": "Precedence",
                "value": "Bulk"
              }
            ],
            "commonHeaders": {
              "returnPath": "prvs=093bd89e2=victim@microsoft.com",
              "from": [
                "\"Deck, Mike\" <victim@microsoft.com>"
              ],
              "date": "Wed, 19 Oct 2016 23:44:23 +0000",
              "to": [
                "\"mailinglist@amazon.com\""
              ],
              "messageId": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>",
              "subject": "Unicorns"
            }
          },
          "receipt": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "processingTimeMillis": 521,
            "recipients": [
              "attacker@unicorntracker.com"
            ],
            "spamVerdict": {
              "status": "PASS"
            },
            "virusVerdict": {
              "status": "PASS"
            },
            "spfVerdict": {
              "status": "PASS"
            },
            "dkimVerdict": {
              "status": "GRAY"
            },
            "action": {
              "type": "Lambda",
              "functionArn": "arn:aws:lambda:us-east-1:408587083461:function:SesUnicornTracker",
              "invocationType": "Event"
            }
          }
        }
      }
    ]
  },

  "badTrackingDomain": {
    "Records": [
      {
        "eventSource": "aws:ses",
        "eventVersion": "1.0",
        "ses": {
          "mail": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "source": "prvs=093bd89e2=victim@amazon.com",
            "messageId": "un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81",
            "destination": [
              "mailinglist@amazon.com"
            ],
            "headersTruncated": false,
            "headers": [
              {
                "name": "Return-Path",
                "value": "<prvs=093bd89e2=victim@amazon.com>"
              },
              {
                "name": "Received",
                "value": "from smtp-fw-9102.amazon.com (smtp-fw-9102.amazon.com [207.171.184.29]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81 for tester@awsunicorns.com; Wed, 19 Oct 2016 23:44:27 +0000 (UTC)"
              },
              {
                "name": "X-SES-Spam-Verdict",
                "value": "PASS"
              },
              {
                "name": "X-SES-Virus-Verdict",
                "value": "PASS"
              },
              {
                "name": "Received-SPF",
                "value": "pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com;"
              },
              {
                "name": "Authentication-Results",
                "value": "amazonses.com; spf=pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com; dkim=pass header.i=@amazon.com;"
              },
              {
                "name": "X-SES-RECEIPT",
                "value": "AEFBQUFBQUFBQUFGb1NtNmpGaUJueEJVKzNONUdSVXBQNmpGZ001SEtFT09SaUtPZGxZQXN4cXE1R1VlL1JYdEx4TVEydjJpdGJGTG9mU09oTGxMVk1iZHpyT2xGT0RDeTFYeXBRUXg5aUdjZTZDcmsrTXpWYzY2bVVtR0dlUU1hM0xHMmNUdUJwd1RXK0VMWC93MlBFTUl3dkFhRWNsTklhckJCamVuRDdzYUE4Z3EwQ2YvTkdYSHVkR253RmJXcGNBU2w2K2I0WjVkWGNCTmJPd2pJT3JVeDdLSGkzMzBiV3orV213QmIvbERaV0VRZnB3VjZ2OGJ0MTBHZFlNSWNjWVhDZ2NUMEZvRUNPdXkzNjV1UnY3YXdmVnNRT3hmRjQyWTlyWTBIVnJlcU1FTC90ajhxZlE9PQ=="
              },
              {
                "name": "X-SES-DKIM-SIGNATURE",
                "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw; d=amazonses.com; t=1476920663; h=X-SES-RECEIPT:From:To:Subject:Date:Message-ID:Content-Type:MIME-Version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=KLrH+YOyo7tu5b9//+Bz6oSVE81ytRUrfCgb3GrRUnafE89lPEMt1ZIF5pvi8Xbo 8iBuAprZANAqqOrZs+mmcXhmkK/3U4VTabxled162S66P697fqXz0Sd90uN5ESQtqr5 gzUY8ASBvqxT903fV5VlNKkZvRHGM3+YqTz2JIKs="
              },
              {
                "name": "DKIM-Signature",
                "value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=amazon.com; i=@amazon.com; q=dns/txt; s=amazon201209; t=1476920667; x=1508456667; h=from:to:subject:date:message-id:mime-version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=JyJJC2fs9WO8knqCz96jYZKgcD/Yg6IkG5f4psiCpuMYMz8p8/dS47hxwXsgHzpqjOjRP4tSoz5W2abvUIgix3ZpFArYKWUYIB3Y6lHUTFsg5nDC1mpjwGnHmGw9YfNz7n10fk4iWKD1Ifg3Iw/MBEqRzLOQQYXQkzdqH+XlbAM=;"
              },
              {
                "name": "X-IronPort-AV",
                "value": "E=Sophos;i=\"5.31,516,1473120000\";  d=\"scan'208,217\";a=\"517075527\""
              },
              {
                "name": "Received",
                "value": "from sea3-co-svc-lb6-vlan2.sea.amazon.com (HELO email-inbound-relay-60012.pdx1.amazon.com) ([10.47.22.34]) by smtp-border-fw-out-9102.sea19.amazon.com with ESMTP/TLS/DHE-RSA-AES256-SHA; 19 Oct 2016 23:44:25 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13MTAUWC001.ant.amazon.com (pdx1-ws-svc-p6-lb9-vlan2.pdx.amazon.com [10.236.137.194]) by email-inbound-relay-60012.pdx1.amazon.com (8.14.7/8.14.7) with ESMTP id u9JNiOfP001092 (version=TLSv1/SSLv3 cipher=AES256-SHA bits=256 verify=OK) for <tester@awsunicorns.com>; Wed, 19 Oct 2016 23:44:24 GMT"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13MTAUWC001.ant.amazon.com (10.43.162.135) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:24 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13D08UWC004.ant.amazon.com (10.43.162.90) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com ([10.43.162.90]) by EX13D08UWC004.ant.amazon.com ([10.43.162.90]) with mapi id 15.00.1104.000; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "From",
                "value": "victim@amazon.com"
              },
              {
                "name": "To",
                "value": "\"mailinglist@amazon.com\""
              },
              {
                "name": "Subject",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Topic",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Index",
                "value": "AQHSKmK4qW8ansOh10CBrwu9MP+7wA=="
              },
              {
                "name": "Date",
                "value": "Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Message-ID",
                "value": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>"
              },
              {
                "name": "Accept-Language",
                "value": "en-US"
              },
              {
                "name": "Content-Language",
                "value": "en-US"
              },
              {
                "name": "X-MS-Has-Attach",
                "value": ""
              },
              {
                "name": "X-MS-TNEF-Correlator",
                "value": ""
              },
              {
                "name": "x-ms-exchange-messagesentrepresentingtype",
                "value": "1"
              },
              {
                "name": "x-ms-exchange-transport-fromentityheader",
                "value": "Hosted"
              },
              {
                "name": "x-originating-ip",
                "value": "[10.43.160.91]"
              },
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"_000_61D9C1210FF34C56A2EA4AD15D1804F7amazoncom_\""
              },
              {
                "name": "MIME-Version",
                "value": "1.0"
              },
              {
                "name": "Precedence",
                "value": "Bulk"
              }
            ],
            "commonHeaders": {
              "returnPath": "prvs=093bd89e2=victim@amazon.com",
              "from": [
                "\"Deck, Mike\" <victim@amazon.com>"
              ],
              "date": "Wed, 19 Oct 2016 23:44:23 +0000",
              "to": [
                "\"mailinglist@amazon.com\""
              ],
              "messageId": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>",
              "subject": "Unicorns"
            }
          },
          "receipt": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "processingTimeMillis": 521,
            "recipients": [
              "attacker@baddomain.com"
            ],
            "spamVerdict": {
              "status": "PASS"
            },
            "virusVerdict": {
              "status": "PASS"
            },
            "spfVerdict": {
              "status": "PASS"
            },
            "dkimVerdict": {
              "status": "GRAY"
            },
            "action": {
              "type": "Lambda",
              "functionArn": "arn:aws:lambda:us-east-1:408587083461:function:SesUnicornTracker",
              "invocationType": "Event"
            }
          }
        }
      }
    ]
  },

  "subjectReply": {
    "Records": [
      {
        "eventSource": "aws:ses",
        "eventVersion": "1.0",
        "ses": {
          "mail": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "source": "prvs=093bd89e2=victim@amazon.com",
            "messageId": "un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81",
            "destination": [
              "mailinglist@amazon.com"
            ],
            "headersTruncated": false,
            "headers": [
              {
                "name": "Return-Path",
                "value": "<prvs=093bd89e2=victim@amazon.com>"
              },
              {
                "name": "Received",
                "value": "from smtp-fw-9102.amazon.com (smtp-fw-9102.amazon.com [207.171.184.29]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81 for tester@awsunicorns.com; Wed, 19 Oct 2016 23:44:27 +0000 (UTC)"
              },
              {
                "name": "X-SES-Spam-Verdict",
                "value": "PASS"
              },
              {
                "name": "X-SES-Virus-Verdict",
                "value": "PASS"
              },
              {
                "name": "Received-SPF",
                "value": "pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com;"
              },
              {
                "name": "Authentication-Results",
                "value": "amazonses.com; spf=pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com; dkim=pass header.i=@amazon.com;"
              },
              {
                "name": "X-SES-RECEIPT",
                "value": "AEFBQUFBQUFBQUFGb1NtNmpGaUJueEJVKzNONUdSVXBQNmpGZ001SEtFT09SaUtPZGxZQXN4cXE1R1VlL1JYdEx4TVEydjJpdGJGTG9mU09oTGxMVk1iZHpyT2xGT0RDeTFYeXBRUXg5aUdjZTZDcmsrTXpWYzY2bVVtR0dlUU1hM0xHMmNUdUJwd1RXK0VMWC93MlBFTUl3dkFhRWNsTklhckJCamVuRDdzYUE4Z3EwQ2YvTkdYSHVkR253RmJXcGNBU2w2K2I0WjVkWGNCTmJPd2pJT3JVeDdLSGkzMzBiV3orV213QmIvbERaV0VRZnB3VjZ2OGJ0MTBHZFlNSWNjWVhDZ2NUMEZvRUNPdXkzNjV1UnY3YXdmVnNRT3hmRjQyWTlyWTBIVnJlcU1FTC90ajhxZlE9PQ=="
              },
              {
                "name": "X-SES-DKIM-SIGNATURE",
                "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw; d=amazonses.com; t=1476920663; h=X-SES-RECEIPT:From:To:Subject:Date:Message-ID:Content-Type:MIME-Version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=KLrH+YOyo7tu5b9//+Bz6oSVE81ytRUrfCgb3GrRUnafE89lPEMt1ZIF5pvi8Xbo 8iBuAprZANAqqOrZs+mmcXhmkK/3U4VTabxled162S66P697fqXz0Sd90uN5ESQtqr5 gzUY8ASBvqxT903fV5VlNKkZvRHGM3+YqTz2JIKs="
              },
              {
                "name": "DKIM-Signature",
                "value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=amazon.com; i=@amazon.com; q=dns/txt; s=amazon201209; t=1476920667; x=1508456667; h=from:to:subject:date:message-id:mime-version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=JyJJC2fs9WO8knqCz96jYZKgcD/Yg6IkG5f4psiCpuMYMz8p8/dS47hxwXsgHzpqjOjRP4tSoz5W2abvUIgix3ZpFArYKWUYIB3Y6lHUTFsg5nDC1mpjwGnHmGw9YfNz7n10fk4iWKD1Ifg3Iw/MBEqRzLOQQYXQkzdqH+XlbAM=;"
              },
              {
                "name": "X-IronPort-AV",
                "value": "E=Sophos;i=\"5.31,516,1473120000\";  d=\"scan'208,217\";a=\"517075527\""
              },
              {
                "name": "Received",
                "value": "from sea3-co-svc-lb6-vlan2.sea.amazon.com (HELO email-inbound-relay-60012.pdx1.amazon.com) ([10.47.22.34]) by smtp-border-fw-out-9102.sea19.amazon.com with ESMTP/TLS/DHE-RSA-AES256-SHA; 19 Oct 2016 23:44:25 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13MTAUWC001.ant.amazon.com (pdx1-ws-svc-p6-lb9-vlan2.pdx.amazon.com [10.236.137.194]) by email-inbound-relay-60012.pdx1.amazon.com (8.14.7/8.14.7) with ESMTP id u9JNiOfP001092 (version=TLSv1/SSLv3 cipher=AES256-SHA bits=256 verify=OK) for <tester@awsunicorns.com>; Wed, 19 Oct 2016 23:44:24 GMT"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13MTAUWC001.ant.amazon.com (10.43.162.135) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:24 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13D08UWC004.ant.amazon.com (10.43.162.90) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com ([10.43.162.90]) by EX13D08UWC004.ant.amazon.com ([10.43.162.90]) with mapi id 15.00.1104.000; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "From",
                "value": "victim@amazon.com"
              },
              {
                "name": "To",
                "value": "\"mailinglist@amazon.com\""
              },
              {
                "name": "Subject",
                "value": "Re: Unicorns"
              },
              {
                "name": "Thread-Topic",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Index",
                "value": "AQHSKmK4qW8ansOh10CBrwu9MP+7wA=="
              },
              {
                "name": "Date",
                "value": "Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Message-ID",
                "value": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>"
              },
              {
                "name": "Accept-Language",
                "value": "en-US"
              },
              {
                "name": "Content-Language",
                "value": "en-US"
              },
              {
                "name": "X-MS-Has-Attach",
                "value": ""
              },
              {
                "name": "X-MS-TNEF-Correlator",
                "value": ""
              },
              {
                "name": "x-ms-exchange-messagesentrepresentingtype",
                "value": "1"
              },
              {
                "name": "x-ms-exchange-transport-fromentityheader",
                "value": "Hosted"
              },
              {
                "name": "x-originating-ip",
                "value": "[10.43.160.91]"
              },
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"_000_61D9C1210FF34C56A2EA4AD15D1804F7amazoncom_\""
              },
              {
                "name": "MIME-Version",
                "value": "1.0"
              },
              {
                "name": "Precedence",
                "value": "Bulk"
              }
            ],
            "commonHeaders": {
              "returnPath": "prvs=093bd89e2=victim@amazon.com",
              "from": [
                "\"Deck, Mike\" <victim@amazon.com>"
              ],
              "date": "Wed, 19 Oct 2016 23:44:23 +0000",
              "to": [
                "\"mailinglist@amazon.com\""
              ],
              "messageId": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>",
              "subject": "Re: Unicorns"
            }
          },
          "receipt": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "processingTimeMillis": 521,
            "recipients": [
              "attacker@unicorntracker.com"
            ],
            "spamVerdict": {
              "status": "PASS"
            },
            "virusVerdict": {
              "status": "PASS"
            },
            "spfVerdict": {
              "status": "PASS"
            },
            "dkimVerdict": {
              "status": "GRAY"
            },
            "action": {
              "type": "Lambda",
              "functionArn": "arn:aws:lambda:us-east-1:408587083461:function:SesUnicornTracker",
              "invocationType": "Event"
            }
          }
        }
      }
    ]
  },

  "inReplyTo": {
    "Records": [
      {
        "eventSource": "aws:ses",
        "eventVersion": "1.0",
        "ses": {
          "mail": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "source": "prvs=093bd89e2=victim@amazon.com",
            "messageId": "un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81",
            "destination": [
              "mailinglist@amazon.com"
            ],
            "headersTruncated": false,
            "headers": [
              {
                "name": "In-Reply-To",
                "value": "xxx"
              },
              {
                "name": "Return-Path",
                "value": "<prvs=093bd89e2=victim@amazon.com>"
              },
              {
                "name": "Received",
                "value": "from smtp-fw-9102.amazon.com (smtp-fw-9102.amazon.com [207.171.184.29]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81 for tester@awsunicorns.com; Wed, 19 Oct 2016 23:44:27 +0000 (UTC)"
              },
              {
                "name": "X-SES-Spam-Verdict",
                "value": "PASS"
              },
              {
                "name": "X-SES-Virus-Verdict",
                "value": "PASS"
              },
              {
                "name": "Received-SPF",
                "value": "pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com;"
              },
              {
                "name": "Authentication-Results",
                "value": "amazonses.com; spf=pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com; dkim=pass header.i=@amazon.com;"
              },
              {
                "name": "X-SES-RECEIPT",
                "value": "AEFBQUFBQUFBQUFGb1NtNmpGaUJueEJVKzNONUdSVXBQNmpGZ001SEtFT09SaUtPZGxZQXN4cXE1R1VlL1JYdEx4TVEydjJpdGJGTG9mU09oTGxMVk1iZHpyT2xGT0RDeTFYeXBRUXg5aUdjZTZDcmsrTXpWYzY2bVVtR0dlUU1hM0xHMmNUdUJwd1RXK0VMWC93MlBFTUl3dkFhRWNsTklhckJCamVuRDdzYUE4Z3EwQ2YvTkdYSHVkR253RmJXcGNBU2w2K2I0WjVkWGNCTmJPd2pJT3JVeDdLSGkzMzBiV3orV213QmIvbERaV0VRZnB3VjZ2OGJ0MTBHZFlNSWNjWVhDZ2NUMEZvRUNPdXkzNjV1UnY3YXdmVnNRT3hmRjQyWTlyWTBIVnJlcU1FTC90ajhxZlE9PQ=="
              },
              {
                "name": "X-SES-DKIM-SIGNATURE",
                "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw; d=amazonses.com; t=1476920663; h=X-SES-RECEIPT:From:To:Subject:Date:Message-ID:Content-Type:MIME-Version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=KLrH+YOyo7tu5b9//+Bz6oSVE81ytRUrfCgb3GrRUnafE89lPEMt1ZIF5pvi8Xbo 8iBuAprZANAqqOrZs+mmcXhmkK/3U4VTabxled162S66P697fqXz0Sd90uN5ESQtqr5 gzUY8ASBvqxT903fV5VlNKkZvRHGM3+YqTz2JIKs="
              },
              {
                "name": "DKIM-Signature",
                "value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=amazon.com; i=@amazon.com; q=dns/txt; s=amazon201209; t=1476920667; x=1508456667; h=from:to:subject:date:message-id:mime-version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=JyJJC2fs9WO8knqCz96jYZKgcD/Yg6IkG5f4psiCpuMYMz8p8/dS47hxwXsgHzpqjOjRP4tSoz5W2abvUIgix3ZpFArYKWUYIB3Y6lHUTFsg5nDC1mpjwGnHmGw9YfNz7n10fk4iWKD1Ifg3Iw/MBEqRzLOQQYXQkzdqH+XlbAM=;"
              },
              {
                "name": "X-IronPort-AV",
                "value": "E=Sophos;i=\"5.31,516,1473120000\";  d=\"scan'208,217\";a=\"517075527\""
              },
              {
                "name": "Received",
                "value": "from sea3-co-svc-lb6-vlan2.sea.amazon.com (HELO email-inbound-relay-60012.pdx1.amazon.com) ([10.47.22.34]) by smtp-border-fw-out-9102.sea19.amazon.com with ESMTP/TLS/DHE-RSA-AES256-SHA; 19 Oct 2016 23:44:25 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13MTAUWC001.ant.amazon.com (pdx1-ws-svc-p6-lb9-vlan2.pdx.amazon.com [10.236.137.194]) by email-inbound-relay-60012.pdx1.amazon.com (8.14.7/8.14.7) with ESMTP id u9JNiOfP001092 (version=TLSv1/SSLv3 cipher=AES256-SHA bits=256 verify=OK) for <tester@awsunicorns.com>; Wed, 19 Oct 2016 23:44:24 GMT"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13MTAUWC001.ant.amazon.com (10.43.162.135) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:24 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13D08UWC004.ant.amazon.com (10.43.162.90) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com ([10.43.162.90]) by EX13D08UWC004.ant.amazon.com ([10.43.162.90]) with mapi id 15.00.1104.000; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "From",
                "value": "victim@amazon.com"
              },
              {
                "name": "To",
                "value": "\"mailinglist@amazon.com\""
              },
              {
                "name": "Subject",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Topic",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Index",
                "value": "AQHSKmK4qW8ansOh10CBrwu9MP+7wA=="
              },
              {
                "name": "Date",
                "value": "Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Message-ID",
                "value": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>"
              },
              {
                "name": "Accept-Language",
                "value": "en-US"
              },
              {
                "name": "Content-Language",
                "value": "en-US"
              },
              {
                "name": "X-MS-Has-Attach",
                "value": ""
              },
              {
                "name": "X-MS-TNEF-Correlator",
                "value": ""
              },
              {
                "name": "x-ms-exchange-messagesentrepresentingtype",
                "value": "1"
              },
              {
                "name": "x-ms-exchange-transport-fromentityheader",
                "value": "Hosted"
              },
              {
                "name": "x-originating-ip",
                "value": "[10.43.160.91]"
              },
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"_000_61D9C1210FF34C56A2EA4AD15D1804F7amazoncom_\""
              },
              {
                "name": "MIME-Version",
                "value": "1.0"
              },
              {
                "name": "Precedence",
                "value": "Bulk"
              }
            ],
            "commonHeaders": {
              "returnPath": "prvs=093bd89e2=victim@amazon.com",
              "from": [
                "\"Deck, Mike\" <victim@amazon.com>"
              ],
              "date": "Wed, 19 Oct 2016 23:44:23 +0000",
              "to": [
                "\"mailinglist@amazon.com\""
              ],
              "messageId": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>",
              "subject": "Unicorns"
            }
          },
          "receipt": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "processingTimeMillis": 521,
            "recipients": [
              "attacker@unicorntracker.com"
            ],
            "spamVerdict": {
              "status": "PASS"
            },
            "virusVerdict": {
              "status": "PASS"
            },
            "spfVerdict": {
              "status": "PASS"
            },
            "dkimVerdict": {
              "status": "GRAY"
            },
            "action": {
              "type": "Lambda",
              "functionArn": "arn:aws:lambda:us-east-1:408587083461:function:SesUnicornTracker",
              "invocationType": "Event"
            }
          }
        }
      }
    ]
  },

  "referencesReply": {
    "Records": [
      {
        "eventSource": "aws:ses",
        "eventVersion": "1.0",
        "ses": {
          "mail": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "source": "prvs=093bd89e2=victim@amazon.com",
            "messageId": "un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81",
            "destination": [
              "mailinglist@amazon.com"
            ],
            "headersTruncated": false,
            "headers": [
              {
                "name": "References",
                "value": "xxxx"
              },
              {
                "name": "Return-Path",
                "value": "<prvs=093bd89e2=victim@amazon.com>"
              },
              {
                "name": "Received",
                "value": "from smtp-fw-9102.amazon.com (smtp-fw-9102.amazon.com [207.171.184.29]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id un5on5rhlf9j9aqmdck3du4oj9th0g6v4ecgmd81 for tester@awsunicorns.com; Wed, 19 Oct 2016 23:44:27 +0000 (UTC)"
              },
              {
                "name": "X-SES-Spam-Verdict",
                "value": "PASS"
              },
              {
                "name": "X-SES-Virus-Verdict",
                "value": "PASS"
              },
              {
                "name": "Received-SPF",
                "value": "pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com;"
              },
              {
                "name": "Authentication-Results",
                "value": "amazonses.com; spf=pass (spfCheck: domain of amazon.com designates 207.171.184.29 as permitted sender) client-ip=207.171.184.29; envelope-from=prvs=093bd89e2=victim@amazon.com; helo=smtp-fw-9102.amazon.com; dkim=pass header.i=@amazon.com;"
              },
              {
                "name": "X-SES-RECEIPT",
                "value": "AEFBQUFBQUFBQUFGb1NtNmpGaUJueEJVKzNONUdSVXBQNmpGZ001SEtFT09SaUtPZGxZQXN4cXE1R1VlL1JYdEx4TVEydjJpdGJGTG9mU09oTGxMVk1iZHpyT2xGT0RDeTFYeXBRUXg5aUdjZTZDcmsrTXpWYzY2bVVtR0dlUU1hM0xHMmNUdUJwd1RXK0VMWC93MlBFTUl3dkFhRWNsTklhckJCamVuRDdzYUE4Z3EwQ2YvTkdYSHVkR253RmJXcGNBU2w2K2I0WjVkWGNCTmJPd2pJT3JVeDdLSGkzMzBiV3orV213QmIvbERaV0VRZnB3VjZ2OGJ0MTBHZFlNSWNjWVhDZ2NUMEZvRUNPdXkzNjV1UnY3YXdmVnNRT3hmRjQyWTlyWTBIVnJlcU1FTC90ajhxZlE9PQ=="
              },
              {
                "name": "X-SES-DKIM-SIGNATURE",
                "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw; d=amazonses.com; t=1476920663; h=X-SES-RECEIPT:From:To:Subject:Date:Message-ID:Content-Type:MIME-Version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=KLrH+YOyo7tu5b9//+Bz6oSVE81ytRUrfCgb3GrRUnafE89lPEMt1ZIF5pvi8Xbo 8iBuAprZANAqqOrZs+mmcXhmkK/3U4VTabxled162S66P697fqXz0Sd90uN5ESQtqr5 gzUY8ASBvqxT903fV5VlNKkZvRHGM3+YqTz2JIKs="
              },
              {
                "name": "DKIM-Signature",
                "value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=amazon.com; i=@amazon.com; q=dns/txt; s=amazon201209; t=1476920667; x=1508456667; h=from:to:subject:date:message-id:mime-version; bh=idg1SL49+/hkG6qNm/ivFcgapn8ZYcFTvIS8eYGsrC0=; b=JyJJC2fs9WO8knqCz96jYZKgcD/Yg6IkG5f4psiCpuMYMz8p8/dS47hxwXsgHzpqjOjRP4tSoz5W2abvUIgix3ZpFArYKWUYIB3Y6lHUTFsg5nDC1mpjwGnHmGw9YfNz7n10fk4iWKD1Ifg3Iw/MBEqRzLOQQYXQkzdqH+XlbAM=;"
              },
              {
                "name": "X-IronPort-AV",
                "value": "E=Sophos;i=\"5.31,516,1473120000\";  d=\"scan'208,217\";a=\"517075527\""
              },
              {
                "name": "Received",
                "value": "from sea3-co-svc-lb6-vlan2.sea.amazon.com (HELO email-inbound-relay-60012.pdx1.amazon.com) ([10.47.22.34]) by smtp-border-fw-out-9102.sea19.amazon.com with ESMTP/TLS/DHE-RSA-AES256-SHA; 19 Oct 2016 23:44:25 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13MTAUWC001.ant.amazon.com (pdx1-ws-svc-p6-lb9-vlan2.pdx.amazon.com [10.236.137.194]) by email-inbound-relay-60012.pdx1.amazon.com (8.14.7/8.14.7) with ESMTP id u9JNiOfP001092 (version=TLSv1/SSLv3 cipher=AES256-SHA bits=256 verify=OK) for <tester@awsunicorns.com>; Wed, 19 Oct 2016 23:44:24 GMT"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13MTAUWC001.ant.amazon.com (10.43.162.135) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:24 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com (10.43.162.90) by EX13D08UWC004.ant.amazon.com (10.43.162.90) with Microsoft SMTP Server (TLS) id 15.0.1104.5; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Received",
                "value": "from EX13D08UWC004.ant.amazon.com ([10.43.162.90]) by EX13D08UWC004.ant.amazon.com ([10.43.162.90]) with mapi id 15.00.1104.000; Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "From",
                "value": "victim@amazon.com"
              },
              {
                "name": "To",
                "value": "\"mailinglist@amazon.com\""
              },
              {
                "name": "Subject",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Topic",
                "value": "Unicorns"
              },
              {
                "name": "Thread-Index",
                "value": "AQHSKmK4qW8ansOh10CBrwu9MP+7wA=="
              },
              {
                "name": "Date",
                "value": "Wed, 19 Oct 2016 23:44:23 +0000"
              },
              {
                "name": "Message-ID",
                "value": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>"
              },
              {
                "name": "Accept-Language",
                "value": "en-US"
              },
              {
                "name": "Content-Language",
                "value": "en-US"
              },
              {
                "name": "X-MS-Has-Attach",
                "value": ""
              },
              {
                "name": "X-MS-TNEF-Correlator",
                "value": ""
              },
              {
                "name": "x-ms-exchange-messagesentrepresentingtype",
                "value": "1"
              },
              {
                "name": "x-ms-exchange-transport-fromentityheader",
                "value": "Hosted"
              },
              {
                "name": "x-originating-ip",
                "value": "[10.43.160.91]"
              },
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"_000_61D9C1210FF34C56A2EA4AD15D1804F7amazoncom_\""
              },
              {
                "name": "MIME-Version",
                "value": "1.0"
              },
              {
                "name": "Precedence",
                "value": "Bulk"
              }
            ],
            "commonHeaders": {
              "returnPath": "prvs=093bd89e2=victim@amazon.com",
              "from": [
                "\"Deck, Mike\" <victim@amazon.com>"
              ],
              "date": "Wed, 19 Oct 2016 23:44:23 +0000",
              "to": [
                "\"mailinglist@amazon.com\""
              ],
              "messageId": "<61D9C121-0FF3-4C56-A2EA-4AD15D1804F7@amazon.com>",
              "subject": "Unicorns"
            }
          },
          "receipt": {
            "timestamp": "2016-10-19T23:44:27.391Z",
            "processingTimeMillis": 521,
            "recipients": [
              "attacker@unicorntracker.com"
            ],
            "spamVerdict": {
              "status": "PASS"
            },
            "virusVerdict": {
              "status": "PASS"
            },
            "spfVerdict": {
              "status": "PASS"
            },
            "dkimVerdict": {
              "status": "GRAY"
            },
            "action": {
              "type": "Lambda",
              "functionArn": "arn:aws:lambda:us-east-1:408587083461:function:SesUnicornTracker",
              "invocationType": "Event"
            }
          }
        }
      }
    ]
  }
}
