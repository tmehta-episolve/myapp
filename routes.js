module.exports = function (app) {
var cars = require('./controllers/car');
var phonebook= require('./controllers/phonebook');
  app.get('/cars', cars.list);
  app.get('/cars/add',cars.add);
  app.get('/cars/adddata',cars.adddata);
  app.get('/cars/:id/edit',cars.edit);
  app.post('/cars/editdata',cars.editdata);
  app.get('/cars/:id/delete',cars.remove);
//  app.get('/phonebook',phonebook.list);
//  app.post('/phonebook/add', phonebook.add);
}
