const express = require('express');
const router = express.Router();
const validate = require('../controllers/validationController');
const scrape = require('../controllers/scrapingController');
const send = require('../controllers/messagingController');
const database = require('../controllers/databaseController');

/* GET home page. */

router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' });
});

// TODO: Look into AirBnB style guide for comments

/*
  POST ROUTE: /track

  Scrape webpage, write information to database, send initial sms to user.
  What this route should do:
  TODO: Validate product page URL provided by user and see if it matches a supported website
  TODO: Validate phone number
  TODO: Scrape product page and locate pricing/product information
  TODO: Use Puppeteer to take a screen of the product/page and display to th user
  TODO: Send initial sms (or email) to user with current product price, product image, and greeting from EVE
  TODO: Allow user to create a login profile to see products they're tracking

  ? Discovered the VSCode plugin called "Better Comments" through Wes Bos's Twitter post:
  ? https://twitter.com/wesbos/status/1001164727987458048
*/

router.post('/track',
  validate.url,
  validate.phone,
  validate.email,
  scrape.product,
  send.email,
  send.sms,
  database.writeProduct
);

module.exports = router;
