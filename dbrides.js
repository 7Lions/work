const mongoose = require('mongoose');
const   Ride = require('./models/car');

mongoose.connect('mongodb://localhost:27017');

const whip = new Ride({
    name: 'Ferrari Dino 246 GT',
    yearOfRelease: 1969,
    maxSpeed: '235 km/h',
    fuelCapacity: '65 litres'
});

whip.save().then(() => console.log('Take Off'));