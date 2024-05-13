const { Customer, validate } = require('../models/customer.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//route to get all genre
router.get( "/", async(req, res) => {
    const customer = await Customer.find().sort('name')
    res.send(customer)
});

router.post( "/", async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })
    customer = await customer.save()
    res.send(customer);
})

module.exports = router;