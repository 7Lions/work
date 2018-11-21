const mongoose = require('mongoose');

module.exports = mongoose.model('Ride', 
   {
      name: String,
      yearOfRelease: Number,
      maxSpeed: String,
      fuelCapacity: String
   });