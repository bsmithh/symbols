var NewName = function(x, y) {
	return x + y;
}

var lower = function(str) {
	return str.toLowerCase();
}

var emoji = function(str) {
	return "<3"; // U+2764 = ❤️
}

module.exports = {
	NewName: NewName,
	lower: lower,
	emoji: emoji,
};

module.exports = require('./lib/parse');