const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://root:saveYourself@localhost:27017/TodoApp?authSource=admin', (err,db)=> {

  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

  db.collection('Users').findOneAndUpdate({'_id' : new ObjectID('599c99b02eda65f3fce3a533')},{'$set':{name: 'gau'}})
  db.collection('Users').findOneAndUpdate({'_id':new ObjectID('599c99b02eda65f3fce3a533')}, {'$inc':{'age': 1}} , {returnOriginal : false}).then((result) => {
    console.log(result);
  })

})
