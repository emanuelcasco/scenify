const { assert } = require('chai'),
  scenify = require('../');

describe('Register scenify', () => {
  it('should register a new scenify succesfully', done => {
    scenify.define('define a multiplication by 10', num => 10 * num);
    scenify
      .perform('define a multiplication by 10', 5)
      .then(result => assert.equal(result, 50))
      .then(() => done())
      .catch(err => done(err));
  });

  it('should fail when try register a scenify twice', done => {
    try {
      scenify.define('define a multiplication by 10', num => 10 * num);
      scenify.define('define a multiplication by 10', num => 10 * num);
      done('Should throw an error');
    } catch (error) {
      done();
    }
  });
});
