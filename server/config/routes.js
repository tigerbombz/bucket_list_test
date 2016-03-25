var logins = require('./../controllers/logins.js');
var trips = require('./../controllers/trips.js');
var users = require('./../controllers/users.js');


  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all friends)

    app.get('/logins/:id', function(req, res) {
      console.log("Im in my routes GET");
      logins.show(req, res);
    })

    app.get('/logins', function(req, res){
      logins.showAll(req, res);
    })

    app.post('/logins', function(req, res){
      logins.post(req, res);
    });

    app.delete('/customers/:id', function(req, res){
      console.log("MY REQ PARMS", req.params);
      customers.delete(req, res);
    })

    app.get('/trips', function(req, res){
      trips.show(req, res);
    })

    app.post('/trips', function(req, res){
      trips.post(req, res);
    })

    app.get('/users', function(req, res){
      users.show(req, res);
    })

    app.post('/users', function(req, res){
      users.post(req, res);
    })
  };//END OF EXPORTS
