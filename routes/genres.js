const { Genre, validate } = require('../models/genre.js');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();


//route to get all genre
router.get( "/", async(req, res) => {
    const genres = await Genre.find().sort('name')
    res.send(genres)
});

router.post( "/", async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let genre = new Genre({
        name: req.body.name
    })
    genre = await genre.save()
    res.send(genre);
})

router.put( "/:id", async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true})
    if (!genre) return res.status(404).send('The genre with the given ID not found')
    res.send(genre);
    
})


module.exports = router;