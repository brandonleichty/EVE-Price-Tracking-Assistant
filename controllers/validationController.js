const validator = require('validator');
const sanitizeUrl = require('@braintree/sanitize-url').sanitizeUrl;
const { URL } = require('url');



/*
  This middleware will provide validation that ensures:
  1) The user provided a valid URL, and
  2) that the URL is from a website or company that is supported (Target, Best, REI, etc)
 */
exports.url = (req, res, next) => {

  // Sanitize URL - keep people from doing sneaky things!
  req.body.url = sanitizeUrl(req.body.url);

  if(!validator.isURL(req.body.url)){
    const err = new Error('Not a valid URL.');
    return next(err);
  }

  // TODO: Check connection to provided URL. Make sure it actually loads!

	const company = new URL(req.body.url).hostname
		.toLowerCase()
		.replace('www.', '')
		.replace('.com', '')
    .trim();


	req.body.lookup = company;

	console.log(
		`The URL has been successfully validated! 😎 The company to scrape is: ${company}`
	);
	return next();
};




// Validates that a valid phone number was provided.
exports.phone = (req, res, next) => {
  /*
	  Checks to see if the phone number provided is a valid US number.
    TODO: Look into supporting other countries--check Twilio docks.
  */
	if (validator.isMobilePhone(req.body.tel, 'en-US')) {
		console.log('Your 📞  number is validated!');
		return next();
	} else {

		// Throw an error to the global error handler if the number provided isn't valid.
		const err = new Error('Not a valid phone number.');
		next(err);
	}
};


exports.email = (req, res, next) => {

  // If the 'Update via email" checkbox wasn't been checked, move to the next middleware.
  if (req.body.email !== 'on') {
    return next();
  }

  // ! Check to see how validator.isEmail works in docs
  // Verify email address provided by user
  if (validator.isEmail(req.body.address)) {
		console.log('Your 📧  address has been validated!');
		return next();
	} else {

		// Throw an error to the global error handler if the number provided isn't valid.
		const err = new Error('Please provided a valid email address.');
		next(err);
	}
}