---
title: Debugging DynamoDb
summary: Resolving an issue with dynamic queries
date: 2020-05-19T11:00:00.000Z
tags: ['aws', 'dynamodb']
draft: true
---

Goal: Execute dynamic queries within DynamoDB based upon specific payload
- Ran into an error and the error msg isn't helpful (i.e. doesnt flag a parameter)

Debugging steps:
- Logging statements before query w/ each of the arguments
- Separate file to quickly iterate on the query command
- Plug in the arguments from above, confirm the same message is being displayed
- Look @ arguments for QueryCommandInput - https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/interfaces/querycommandinput.html
- Undefined is listed instead of null. Seems small but interepreted differently
- Test replacing null w/ undefined for each null expression (it works)
- Plug into the main function - also works

Recap:
- Logs are helpful
- Make sure params are properly defined - reference documentation
- Make it easy to reproduce - helper scripts / files



Error: 
Error TypeError: Cannot read properties of undefined (reading '0')
    at Object.AttributeValue2.visit (/Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:2510:41)
    at serializeAws_json1_0AttributeValue (/Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:6557:40)
    at /Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:6897:19
    at Array.reduce (<anonymous>)
    at serializeAws_json1_0Key (/Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:6892:36)
    at serializeAws_json1_0QueryInput (/Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:7085:28)
    at serializeAws_json1_0QueryCommand (/Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:3915:29)
    at serialize (/Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:10339:67)
    at /Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:526:29
    at /Users/kevingrimm_/Desktop/PROJECTS/FORM4/ff_sales_site/sales-app/.sst/artifacts/admin-sales-app-my-stack-form4-Lambda_GET_-filings-latestV3/src/form4/handlers/txns/getLatestTxnsV3.js:12268:30