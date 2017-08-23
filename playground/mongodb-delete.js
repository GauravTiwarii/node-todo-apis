const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://root:saveYourself@localhost:27017/TodoApp?authSource=admin', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  db.collection('Todos').deleteMany({ text:'Eat Lunch'}).then((result) => {
    console.log(result);
  });


  //deleteOne
  db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
    console.log(result);
  })

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
    console.log(result);
  })

  //deleteMany
  db.collection('Todos').deleteOne({'name':'Andrew'}).then((result) => {
    console.log(result);
  })

  //deleteOne
  db.collection('Todos').findOneAndDelete({'name':'Andrew'}).then((result) =>{
    console.log(result);
  })

  //findOneAndDelete using _id
  db.collection('Users').findOneAndDelete({
    _id:new ObjectID('599c9c3864a615f4bf158d63')
  }).then((results) => {
    console.log(JSON.stringify(results,undefined, 2));
  })



})
