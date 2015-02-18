var maths = require("../js/maths.js"),
	expect = require("expect.js");

describe('Mathematical formula', function(){
	describe('Addition', function(){
		it('should pass with positive values', function(){
			expect(maths.add(1,2)).to.be(3);
		});
		it('should pass with negative values', function(){
			expect(maths.add(1,-2)).to.be(-1);
			expect(maths.add(-2,1)).to.be(-1);
			expect(maths.add(1,-20)).to.be.lessThan(1);
		});
	});
	describe('Subtraction', function(){
		it('should pass with positive values', function(){
			expect(maths.subtract(1,2)).to.be(-1);
			expect(maths.subtract(2,1)).to.be(1);
			expect(maths.subtract(0,1)).to.be(-1);
			expect(maths.subtract(1,0)).to.be(1);
		});
		it('should pass with negative values', function(){
			expect(maths.subtract(-1,2)).to.be(-3);
			expect(maths.subtract(-2,1)).to.be(-3);
			expect(maths.subtract(-1,0)).to.be(-1);
			expect(maths.subtract(1,2)).to.be(-1);
			expect(maths.subtract(2,1)).to.be(1);
			expect(maths.subtract(0,-1)).to.be(1);
		});
	});
	describe('Multiply', function(){
		it('should pass with positive values', function(){
			expect(maths.multiply(0,1)).to.be(0);
		});
		it('should fail with error', function(){
			expect(maths.multiply(0)).to.be(null);
			expect(maths.multiply({},1)).to.be(null);
			expect(maths.multiply("aa",1)).to.be(null);
		});
	});
});