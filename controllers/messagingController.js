// Twilio Credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

/*
	This middleware will use SendGrid to keep the user up-to-date via email.
*/
exports.email = (req, res, next) => {
	// If the 'Update via email" checkbox wasn't checked, move to the next middleware.
	if (req.body.email !== 'on') {
		return next();
	}

	// TODO: Insert code to send email to user here.

	return next();
};

/*
	This middleware uses Twilio to send sms updates to the user.
	The initial text will have the product name, company name, current price, and product image.
*/
exports.sms = (req, res, next) => {
	const phone = '+1' + req.body.tel;

	client.messages
		.create({
			to: phone,
			from: process.env.TWILIO_PHONE_NUMBER,
			mediaUrl: `${req.body.image}`,
			body: `I've started watching the ${req.body.title} from ${req.body.company}. The price is currently ${req.body.price}.

I'll update you if there are any changes.
-EVE`
		})
		.then(message => console.log(message.sid))
		.done();

	console.log(`An email was sent to ${req.body.address}, and a text to ${req.body.tel}.`)
	res.send(`An email was sent to ${req.body.address}, and a text to ${req.body.tel}.`);
};
