const express = require('express');
const mongoose = require('mongoose');
const Ride = require('./models/car');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017');
 
app.get('/', (req, res) => {
    res.json({
      name: 'Williams',
      class: 'Ogah'
    })
});

app.get('/cars', (req, res) => {
    Ride.find().then((cars) => {
      res.json(cars)
    })
});
//To find all.

app.get('/cars/:name', (req, res) => {
    const name = req.params.name;
    Ride.findOne({name: name}).then((ride) => {
        res.json(ride)
    })
});
//To find one by name.

app.post('/cars', (req, res) => {
    const body = req.body
    const newCar = new Ride(body);

    newCar.save().then((ride) => {
        res.json(ride)
    })
});
//For creating cars.

app.put('/cars/:name', (req, res) => {
    const name = req.params.name;
    Ride.findByNameAndUpdate({name: name}).then((ride) => {
        Ride.findOne({name: name}).then((ride) => {
            res.json(ride)
    })
});

app.delete('/cars/:name', (req, res) => {
    const name = req.params.name;
    Ride.findByNameAndRemove({name: name}).then((ride) => {
        res.json(ride)
    }) 
});

app.listen(port, () => console.log(`Server don dey hear ${port} words.`));