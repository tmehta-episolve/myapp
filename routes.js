module.exports = function (app) {
var cars = require('./controllers/car');
var phonebook= require('./controllers/phonebook');
  app.get('/cars', cars.list);
  app.get('/cars/add',cars.add);
  app.get('/cars/adddata',cars.adddata);
//  app.get('/phonebook',phonebook.list);
//  app.post('/phonebook/add', phonebook.add);
}
