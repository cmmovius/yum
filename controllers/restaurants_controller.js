var Schema = require("../db/schema.js");

var ItemModel = Schema.ItemModel;
var RestaurantModel = Schema.RestaurantModel;

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, restaurants){
      if (err) {
        console.log(err);
      } else {
        console.log(restaurants);
      }
    });
  },
  show: function(req){
    RestaurantModel.findOne({name: req.name}, function(err, restaurant){
      if (err) {
        console.log(err);
      } else {
        console.log(restaurant);
      }
    });
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, restaurant){
      if (err){
        console.log(err);
      } else {
        console.log(restaurant);
      }
    });
  },
  destroy: function(req){
    RestaurantModel.findOneAndRemove({name: req.name}, function(err, restaurant){
      if (err) {
        console.log(err);
      } else {
        console.log(restaurant);
      }
    });
  }
};
