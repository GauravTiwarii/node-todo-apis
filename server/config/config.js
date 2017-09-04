var env = process.env.NODE_ENV || 'development';
if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://root:saveYourself@localhost:27017/TodoApp?authSource=admin'
}
else if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://root:saveYourself@localhost:27017/TodoAppTest?authSource=admin'
}
