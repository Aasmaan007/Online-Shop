const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  //   we connect to mongo db server using connect
  database = client.db('online-shop');
  //   we create a databse 
}
// promise resolves to client object which has internal information about connection
// async functions always return a promise automatically even without return staement 
function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};