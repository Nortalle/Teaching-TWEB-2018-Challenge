// loads environment variables
require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://root:root@192.168.99.100:27017/movie-time?authSource=admin', { useNewUrlParser: true });

const { Schema, connection } = mongoose;
const movieSchema = new Schema({
  overview: String,
  voteAverage: Number,
  releaseDate: Date,
  video: Boolean,
  title: String,
  originalLanguage: String,
  tmdbId: Number,
  originalTitle: String,
  genres: [String],
  popularity: Number,
  voteCount: Number,
  backdropPath: String,
  adult: Boolean,
  posterPath: String,
});
const userSchema = new Schema({
  username: String,
  password: String,
});

const Movie = mongoose.model('Movie', movieSchema);
const User = mongoose.model('User', userSchema);


// Enable CORS for the client app
app.use(cors());

app.get('/', (req, res) => {
  Movie.find({}).exec().then((err, movies) => res.send(movies));
});

app.post('/auth/register', (req, res) => {
  const { username, password } = req.body;
  User.update({ username, password });
  res.status(201);
  res.send('ok');
  // register a user and send 201 Created.
});

app.post('auth/login', (req, res) => {
  const { username, password } = req.body;
  User.find({ username, password });
  res.status(400);
  res.send('connected');
  // check the credentials
  // generate a token token -> jwt.sign()
  // include the userId inside the token's payload
  // if the check fails, send 401 Unauthorized
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err);
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${port}`);
});

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
