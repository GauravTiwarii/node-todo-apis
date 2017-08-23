
const {MongoClient, ObjectID} = require('mongodb');



db = MongoClient.connect('mongodb://root:saveYourself@localhost:27017/TodoApp?authSource=admin', (err,db) =>{
  if(err){
    console.log('Unable to admin connect to MongoDB server.');
    return;
  }
  console.log('Connected to MongoDB server');
    db.collection('Todos').find().toArray().then( (docs) => {
     console.log('Todos');
     console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
     console.log('Unable to fetch todos', err);
   });

      // db.close();

});
