(function() {
  'use strict';

  window.zoo = window.zoo || {};

  
  // allows creation of custom error
  window.zoo.CustomError = function CustomError(message) {
    this.name = 'CustomError';
    this.message = message || 'Default Message';
    this.stack = (new Error()).stack;
  };
}());
