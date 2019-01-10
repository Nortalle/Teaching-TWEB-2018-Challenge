const MovieModel = {
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
};

module.exports = () => MovieModel;
