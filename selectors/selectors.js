const selectors = {

	// Target selectors
	target: {
		company: 'Target',
		title:
			'#mainContainer > div > div > div.sc-hlILIN.jsaTBW > div > div:nth-child(1) > h1 > span[itemprop="title"]',
		price:
			'#mainContainer > div > div > div.sc-hlILIN.jsaTBW > div > div.h-padding-h-default.h-padding-t-tight.styles__ResponsiveSidebar-vttgqz-0.bCJeMz > div span',
		image:
			'#mainContainer > div > div > div.sc-hlILIN.jsaTBW > div > div.CarouselWrapper-s9zgt9n-0.dMNoUr.sc-eNQAEJ.hVaSEp > div.sc-hizQCF.jezFId > div > div.sc-giadOv.boRdsA.sc-eNQAEJ.hVaSEp > div img'
  },

	// Best Buy selectors
	bestbuy: {
		company: 'Best Buy',
		title: '.type-subhead-alt-regular',
		price: '.pb-purchase-price',
		image: '.loaded'
	},
	rei: {
		company: 'REI',
		title: '.product-title',
		price: '.off-price',
		image: '.media-center-primary-image'
	},
	'bananarepublic.gap': {
		title:
			'#product > div.l--buy-box > div.g-inner > div.clearfix.sp_top.sp.pd_horizontal_sm.js-product-info > div.sp_sm > h1',
		price:
			'#product > div.l--buy-box > div.g-inner > div.clearfix.sp_top.sp.pd_horizontal_sm.js-product-info > div.sp_top_0-2 > h5',
		image:
			'#react-photo-carousel > div > div.product-photo > ul > li:nth-child(1) > a > img'
  },

	// Walmart pricing is split up into separate div elements. Revisit this later.
	walmart: {
		company: 'Walmart',
		title: '.prod-ProductTitle > div:nth-child(1)',
		price: '.Price-enhanced > span:nth-child(1) > span:nth-child(2)',
		image: '.prod-HeroImage-image'
	},
	nike: {
		company: 'Nike',
		title: 'h1.ncss-brand',
		price: '.rr-subtitle > span:nth-child(2) > span:nth-child(1)',
		image:
			'button.grid-image:nth-child(1) > div:nth-child(1) > picture:nth-child(3) > img:nth-child(4)'
	},
	topodesigns: {
		company: 'Topo Designs',
		title: '.title',
		price: '.actual-price',
		image: 'div.owl-item.active.center > img'
	}
};

exports.selectors = selectors;
