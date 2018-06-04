const mongoose = require('mongoose');

// Import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });


/*
  1. Connect to our mongo database
  2. Tell Mongoose to use ES6 promises
  3. Handle any bad connections
 */
mongoose.connect(process.env.DATABASE || 'mongodb://localhost/EVEDB');
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🚫 🚫 🚫 There was an error connecting to the Mongo database!→ ${err.message}`);
});

// Start the app!
const app = require('./app');
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
	console.log(`Express running → PORT ${server.address().port}`);
});
