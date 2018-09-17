const { assert } = require('chai'),
  simulacrum = require('../src');

describe('Register simulacrum', () => {
  it('should register a new simulacrum succesfully', done => {
    simulacrum.define('define a multiplication by 10', num => 10 * num);
    simulacrum
      .perform('define a multiplication by 10', 5)
      .then(result => assert.equal(result, 50))
      .then(() => done())
      .catch(err => done(err));
  });

  it('should fail when try register a simulacrum twice', done => {
    try {
      simulacrum.define('define a multiplication by 10', num => 10 * num);
      simulacrum.define('define a multiplication by 10', num => 10 * num);
      done('Should throw an error');
    } catch (error) {
      done();
    }
  });
});
