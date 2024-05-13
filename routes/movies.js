const { Movie, validate } = require('../models/movie.js');
const { Genre } = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
    const movies = await movies.find().sort('title');
    res.send(movies);
});

//Add a new movie
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');

    let movie = new Movies({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();

    res.send(movie);
});

module.exports = router;