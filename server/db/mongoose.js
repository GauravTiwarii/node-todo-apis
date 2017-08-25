var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:saveYourself@localhost:27017/TodoApp?authSource=admin');


module.exports = {mongoose};
