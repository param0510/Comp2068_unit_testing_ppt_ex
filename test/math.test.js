// test/math.test.js

// this file is reponsible for testing the math.js file using chai module's 'expect' assertion library
// importing chai module
const chai = require('chai');
// using chai module's expect assertion library
const expect = chai.expect;

// importing math.js add function
const add = require('../math');

// building assertions for different test cases for the add function inside math.js file
describe('add function tests', () => {
    // Testing equality of the expected result with the actual result
    it('should return the sum of two numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should return the number itself when adding zero to any number', () => {
        expect(add(0, 10)).to.equal(10);
        expect(add(0, -5)).to.equal(-5);
        expect(add(0, 0)).to.equal(0);
    });

    // Using comparitive statements like lessThan and greaterThan to test out the results (Expected v/s Actual)
    it('should return a negative number when adding a negative number to a positive number (If magnitude of negative number is greater than the magnitude of positive number)', () => {
        expect(add(-5, 3)).to.lessThan(0);
        expect(add(-10, 5)).to.lessThan(0);
    });

    it('should return a positive number, when adding any two positive numbers', () => {
        expect(add(0, 10)).to.greaterThan(0);
        expect(add(23, 56)).to.greaterThan(0);
    });

    it('should return a negative number, when adding any two negative numbers', () => {
        expect(add(-4, -30)).to.lessThan(0);
        expect(add(-13, -76)).to.lessThan(0);
    });

});

//EXERCISE: Build test cases for multiply function like above
//1. multiplying works as intended
//2. multiplying by zero yields zero
//3. multiplying by a negative number yields a negative number
//4. multiplying by two negative numbers yields a positive number
