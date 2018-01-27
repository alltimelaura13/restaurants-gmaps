const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
        type: String,
        required: [true, `Name can't be empty`]
    },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
