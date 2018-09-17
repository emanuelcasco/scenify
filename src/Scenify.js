'use strict';

const Scenario = require('./Scenario');

module.exports = class Scenify {
  constructor(options = {}) {
    this.options = options;
    this.scenarios = {};
  }

  getScenario(description, throwError = true) {
    if (!this.scenarios[description] && throwError) {
      throw new Error(`Invalid factory '${description}' requested`);
    }
    return this.scenarios[description];
  }

  define(description, operation) {
    if (this.getScenario(description, false)) {
      throw new Error(`Scenario ${description} already defined`);
    }
    this.scenarios[description] = new Scenario(description, operation);
    return this.scenarios[description];
  }

  async perform(description, params) {
    return this.getScenario(description).perform(params);
  }
};
