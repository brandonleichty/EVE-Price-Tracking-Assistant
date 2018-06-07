const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const { URL } = require('url');
const helpers = require('../helpers');

// Import selectors objects for each company
const { selectors } = require('../selectors/selectors.js');

exports.product = (req, res, next) => {


	/*
    Uses the pre-defined CSS selectors located in 'selectors.js'.
    The variable is defined based upon what company is passed into the selector.
  */
	const cssSelectors = {
		price: selectors[req.body.lookup]['price'],
		title: selectors[req.body.lookup]['title'],
		image: selectors[req.body.lookup]['image'],
		company: selectors[req.body.lookup]['company']
	};

	const endPoint = new URL(req.body.url);

	(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(endPoint);

		/*
			Get product title and place it on the req.body
			TODO: throw error if the price, name, or image can't be found
		*/


		req.body.title = await page.evaluate(
				select => document.querySelector(select.title).innerText.trim(), cssSelectors);
			console.log(req.body.title);

		req.body.price = await page.evaluate(
			select => document.querySelector(select.price).innerText.trim(),
			cssSelectors
		);

		req.body.image = await page.evaluate(
		  select => document.querySelector(select.image).src, cssSelectors
		);

		await browser.close();

		req.body.company = cssSelectors.company;
	})()
		.then(() => {
			return next();
		})
		.catch(err => {
      console.error(err);
      return next(err);
		});

	// return next();
};
