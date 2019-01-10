// loads environment variables
require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const MovieModel = require('./models/MovieModel.js');
const UserModel = require('./models/UserModel.js');

const app = express();
const port = process.env.PORT || 3000;
const portdb = process.env.PORTDB || 27017;
const adresseDB = process.env.ADDRESSDB || '192.168.99.100';
const usernameDB = process.env.USERNAMEDB || 'root';
const passwordDB = process.env.PASSWORDDB || 'root';

mongoose.connect(`mongodb://${usernameDB}:${passwordDB}@${adresseDB}:${portdb}/movie-time?authSource=admin`, { useNewUrlParser: true });

const { Schema, connection } = mongoose;
const movieSchema = new Schema(MovieModel);
const userSchema = new Schema(UserModel);

const Movie = mongoose.model('Movie', movieSchema);
const User = mongoose.model('User', userSchema);


// Enable CORS for the client app
app.use(cors());

app.get('/', (req, res) => {
  res.send(Movie.find({}).exec());
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
