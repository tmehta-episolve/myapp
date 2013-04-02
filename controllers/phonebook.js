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

exports.add = function (req, res) {
  var phonedata = new PhoneBook(req.body);
  phonedata.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/phonebook');
      console.log(phonedata);
    }
 });
}
