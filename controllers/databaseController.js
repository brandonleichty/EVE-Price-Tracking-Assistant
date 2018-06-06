const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.writeProduct = (req, res) => {
	Product.create(req.body, (err, user) => {
		if (err) {
			console.log(`Oops! There was an error: ${err.message}`);
			return next(err);
		} else {
			console.log(`Successfully added a new product for EVE to track: ${req.body.title} from ${req.body.company}.`);
      res
        .status(201)
        .end();
		}
	});
};
