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
exports.add = function(req,res){
 res.render('car_new', {
        title: 'New Car Entry'
    });
}

exports.adddata = function (req, res) {

 var car = new Car({
   car_name: req.param('car_name'),
   color: req.param('color'),
   company: req.param('company')
 });
  car.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/cars');
      console.log(car);
    }
  });
}
// display template and data in template
exports.edit = function(req,res){
  Car.findOne({_id : req.params.id}, function(err, cars) {
    res.render('car_edit',
       {
      title: 'Edit Car',
      car_name:cars.car_name,
      color:cars.color,
      company:cars.company,
      _id:cars._id
       });
 });
}
// save data at time of edit
exports.editdata = function (req, res) {
//res.send(req.body);
  Car.findOneAndUpdate({_id : req.body.id}, req.body,

  function(err, cars) {
      console.log(cars);
    res.redirect('/cars/');
  });
}
exports.remove = function(req,res){
//res.send(req.param('id'));
 Car.remove({_id : req.param('id')},

  function(err, cars) {
      console.log(cars);
    res.redirect('/cars/');
  });

}
