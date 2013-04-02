var mongoose = require('mongoose')
  , Addressbook = mongoose.model('Addressbook');

exports.list = function(req, res) {
  Addressbook.find({}, function(err, addressbook) {
  res.render('addressbook', {
      title: 'My Addressbook',
      adds: addressbook
    });
 });
}
