var mongoose = require('mongoose')
  , PhoneBook = mongoose.model('PhoneBook');

exports.list = function(req, res) {
  PhoneBook.find({}, function(err, phonebook) {
//  console.log(phonebook);
  res.render('phonebook', {
      title: 'Phone List',
      phonebook: phonebook
    });
 });
}
