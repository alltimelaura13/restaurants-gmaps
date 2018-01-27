const Restaurant = require('../models/restaurant.model');
const path = require('path')

module.exports.index = (req, res, next) => {
  res.render(mapa);
}

// module.exports.....

module.exports.index = (req, res, next) => {
  Restaurant.find()
    .then((restaurant) => {
      res.render('mapa', {
        restaurants: restaurant
      });
    });
};
