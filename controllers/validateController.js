const { URL } = require('url');

/*
  This middleware will provide validation that ensures:
  1) The user provided a valid URL, and
  2) that the URL is from a website or company that is supported (Target, Best, REI, etc)
 */
exports.url = (req, res, next) => {
  const company = new URL(req.body.url).hostname
  .toLowerCase()
  .replace('www.', '')
  .replace('.com', '')
  .toString()
  .trim();

	console.log(`The URL has been successfully validated! 😎 The company to scrape is: ${company}`);
	next();
};

// Validates that a valid phone number was provided. Automatically adds the the US country code (+1) if not added.
exports.phone = (req, res, next) => {
	console.log('Your 📞 number is validated!');
	next();
};
