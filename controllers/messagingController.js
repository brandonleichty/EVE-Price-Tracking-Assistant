'use strict';
const nodemailer = require('nodemailer');

// Twilio Credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

/*
	This middleware will use SendGrid to keep the user up-to-date via email.
*/
exports.email = (req, res, next) => {
	// If the 'Update via email" checkbox wasn't been checked, move to the next middleware.
	if (req.body.email !== 'on') {
		return next();

		// Else, if the email checkbox HAS been checked, send an email.
	} else {


		/*
			TODO: Insert code to send email to user here.
		*/

		// Create reusable transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			auth: {
				user: 'ky4u75gya7x3tvv6@ethereal.email',
				pass: 'vScTWHRm6ZfczyXZW3'
			}
		});

		// Setup email data with unicode symbols
		const mailOptions = {
			from: '"EVE 🤖" <eve@evetracking.com>', // sender address
			to: `${req.body.address}`,
			subject: `EVE is now watching ${req.body.title} from ${req.body.company}`,
			text: `I've started watching the ${req.body.title} from ${req.body.company}. The price is currently ${req.body.price}.

			I'll update you if there are any changes.
			-EVE`,
			html:
`<p>I've started watching the ${req.body.title} from ${req.body.company}. The price is currently ${req.body.price}.<br><br>
I'll update you if there are any changes.<br>
<b>-EVE</b></p>`
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		});
	}

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
			body: `I've started watching the ${req.body.title} from ${
				req.body.company
			}. The price is currently ${req.body.price}.

I'll update you if there are any changes.
-EVE`
		})
		.then(message => console.log(message.sid))
		.done();

		return next();
};
