var mongoose = require('mongoose');
var Trip = mongoose.model('Trip');

module.exports = (function() {
  return {
    show: function(req, res) {
      Trip.find({ UserId: req.query.user_id }, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function(req, res) {
      console.log("im in my controllers");
      Trip.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    delete: function(req, res){
      Trip.remove({_id: req.params.id}, function (err, results){
      console.log(results);
      });
    }

  };
})();
