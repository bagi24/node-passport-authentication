const dbPassword =
  'mongodb+srv://bagrati:' +
  encodeURIComponent('bagrati') +
  '@cluster0.mnvsl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

module.exports = {
  mongoURI: dbPassword,
};
