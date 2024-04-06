const mongoose = require('mongoose');
const genres = require('./routes/genres.js')
const express = require('express');
const app = express();

app.use(express.json())
app.use('/api/genre', genres)


mongoose.connect('mongodb://127.0.0.1/movierental', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err))



const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});