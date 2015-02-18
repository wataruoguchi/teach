/*global module*/

var validatePhone = function (value) {
	return value.match(/\d/g).length===10;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports.validatePhone = validatePhone;
}