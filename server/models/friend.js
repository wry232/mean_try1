console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
// var Schema = mongoose.Schema;
var FriendSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  birthday:Date});
  mongoose.model('Friend', FriendSchema);
