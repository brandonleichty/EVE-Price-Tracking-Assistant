

 exports.titleCase = (string) => {
	return string
		.toLowerCase()
		.split(' ')
		.map(function(word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(' ');
}
