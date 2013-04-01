var mongoose = require('mongoose'), Schema = mongoose.Schema;
var PhoneSchema = new Schema({
//  _id: Number,
  name: String, 
 }
);
mongoose.model('PhoneBook', PhoneSchema);
