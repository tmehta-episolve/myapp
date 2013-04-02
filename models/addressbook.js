var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
var AddBookSchema = new Schema({
  _id: Number,
  name: String
  }
);
mongoose.model('Addressbook', AddBookSchema);

