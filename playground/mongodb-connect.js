// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj)

db = MongoClient.connect('mongodb://root:saveYourself@localhost:27017/TodoApp?authSource=admin', (err,db) =>{
  if(err){
    console.log('Unable to admin connect to MongoDB server.');
    return;
  }
  console.log('Connected to MongoDB server');


      // db.collection('Todos').insertOne({
      //   test:'Something to do',
      //   completed:false
      // }, (err, result ) => {
      //   if(err){
      //     return console.log('Unable to insert Todo.', err);
      //   }
      //   console.log(JSON.stringify(result.ops, undefined, 2));
      // });
      //
      // db.collection('Users').insertOne({
      //   name: 'Andrew',
      //   age: 25,
      //   location:'Philadelphia'
      // }, (err, result) => {
      //   if(err){
      //     return console.log('Unable to insert user', err)
      //   }
      //   console.log(result.ops[0]._id.getTimestamp());
      // });

      db.close();

});
