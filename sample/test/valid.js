var expect = require("expect.js"),
	validate = require("../js/valid.js");

describe('Mobile telephone number', function () {
	it('should be a local number', function () {
		expect(validate.validatePhone('604-123-1234')).to.be.ok();
		expect(validate.validatePhone('6041231234')).to.be.ok();
	});
	it('should not include country code', function () {
		expect(validate.validatePhone('1-800-123-1234')).to.not.be.ok();
		expect(validate.validatePhone('18001231234')).to.not.be.ok();
	});
	it('should not contain an extension');
});