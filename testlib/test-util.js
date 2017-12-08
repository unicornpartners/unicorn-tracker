const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.deleteAll = function(tableName) {
  console.log(`Deleting items from ${tableName}`);
  return docClient.scan({
    TableName: tableName,
    AttributesToGet: ['Alias']
  }).promise()
  .then(data => {
    console.log(`Deleting ${data.Items.length} items`);
    if(data.Items.length === 0) {
      console.log('Table is already empty');
      return;
    }

    const deleteRequests = data.Items.map(item => {
      return {
        DeleteRequest: {
          Key: item
        }
      }
    });
    const requestItems = {};
    requestItems[tableName] = deleteRequests;
    return docClient.batchWrite({RequestItems: requestItems}).promise();
  })
}
