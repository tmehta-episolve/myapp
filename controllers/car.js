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
// var cars = new Car({car_name:req.body.car_name});
/*var cars = new Car(); 
cars.save({
car_name: req.param('car_name'),
color: req.param('color')
//company: req.company('company')
}, function( error, docs) {
        res.redirect('/')
    }
);
*/
var cars= new Car(req.param);
//res.send(req.param('car_name'));
  
  cars.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/cars');
      console.log(cars);
    }
  });
}
