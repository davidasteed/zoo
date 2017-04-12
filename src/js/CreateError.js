(function() {
  'use strict';

  window.zoo = window.zoo || {};

  /**
   * [CustomError allows creation of custom error]
   * @param {String} message [custom error message]
   */
  window.zoo.CustomError = function CustomError(message) {
    this.name = 'CustomError';
    this.message = message || 'Custom Error!';
    this.stack = (new Error()).stack;
  };

}());
