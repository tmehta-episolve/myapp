var mongoose = require('mongoose'), Schema = mongoose.Schema;
var CarSchema = new Schema({
//  pk_id: Number,
  car_name: String,
  color: String,
  company: String, 
 }
);
mongoose.model('Car', CarSchema);
