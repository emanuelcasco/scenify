'use strict';

module.exports = class Scenario {
  constructor(description, operation) {
    if (!description) {
      throw new Error('Invalid description constructor passed to the factory');
    }

    if (!operation) {
      throw new Error('Invalid function constructor passed to the factory');
    }

    this.description = description;
    this.operation = operation;
  }

  async perform(params = {}) {
    return this.operation(params);
  }
};
