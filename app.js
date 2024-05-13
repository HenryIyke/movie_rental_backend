const mongoose = require('mongoose');
const genres = require('./routes/genres.js')
const customers = require('./routes/customers.js')
const movies = require('./routes/genres.js')
const rentals = require('./routes/rentals.js')
const users = require('./routes/users.js')
const auth = require('./routes/auth.js')
const express = require('express');
const app = express();
const config = require('config');

app.use(express.json());
app.use('/api/genre', genres);
app.use('/api/customer', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);


mongoose.connect('mongodb://127.0.0.1/movierental', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err))

if (!config.get("jwtPrivateKey")){
    console.error("FATAL ERROR: jtwPrivateKey is not defined");
    process.exit(1);
}



const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});