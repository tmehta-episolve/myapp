var mongoose = require('mongoose'), Schema = mongoose.Schema;
var PhoneSchema = new Schema({
//  _id: Number,
  name: String, 
  phone_number: Number,
 }
);
mongoose.model('PhoneBook', PhoneSchema);
