const { assert } = require('chai'),
  simulacrum = require('../src');

describe('Register simulacrum', () => {
  it('should register a new simulacrum succesfully', done => {
    simulacrum.define('Should save a simple calculation', num => 10 * num);
    simulacrum
      .perform('Should save a simple calculation', 5)
      .then(result => assert.equal(result, 50))
      .then(() => done())
      .catch(err => done(err));
  });

  it('should fail when try register a simulacrum twice', done => {
    try {
      simulacrum.define('Should save a simple calculation', num => 10 * num);
      simulacrum.define('Should save a simple calculation', num => 10 * num);
      done('Should throw an error');
    } catch (error) {
      done();
    }
  });
});
