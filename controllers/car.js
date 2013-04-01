var mongoose = require('mongoose')
  , Car = mongoose.model('Car');

exports.list = function(req, res) {
  Car.find({}, function(err, cars) {
  res.render('car', {
      title: 'Cars List',
      cars: cars
    });
 });
}
