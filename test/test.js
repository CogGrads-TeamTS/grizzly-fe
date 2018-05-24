const chai = require('chai');  
const assert = chai.assert;  

describe('checking chai test runs', () => {
    it('returns the value 3', () => {

        assert.equal(1 + 2, 3);
    });
});