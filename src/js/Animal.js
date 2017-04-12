(function() {
  'use strict';

  // create namespace if is doesn't already exist
  window.zoo = window.zoo || {};

  // initialize custom error object prior to catch blocks
  let CustomError = window.zoo.CustomError;
  CustomError.prototype = Object.create(Error.prototype);
  CustomError.prototype.constructor = CustomError;

  window.zoo.Animal = class Animal {
    /**
     * [parent class constructor]
     * @param  {String} name        [name of the Animal instance]
     * @param  {Date} dateOfBirth   [Date object storing date of birth]
     * @throws {CustomError}        [Throw a custom error name provided is invalid]
     * @throws TypeError            Throws if data type is incorrect
     * @return {void}               [returns nothing]
     */
    constructor(name, dateOfBirth) {
      // error handling for name argument
      if (typeof(name) === 'string') {
        this.name = name;
      } else {
        // throw a custom error if name provided is invalid
        throw new CustomError('The Animal base constructor failed: invalid name provided!');
      }

      // error handling for dateOfBirth
      if (dateOfBirth instanceof Date) {
        this.dateOfBirth = dateOfBirth;
      } else if (dateOfBirth === undefined) {
        this.dateOfBirth = new Date();
      } else {
        throw new TypeError('dateOfBirth was not a Date Object!');
      }

      // set animal to be alive
      this.isDead = false;
    }

    /**
     * [set a value on the name for a class instance]
     * @param  {void}        void is returned
     * @throws TypeError     Throws if data type is incorrect
     */
    setName(name) {
      if (typeof(name) === 'string') {
        this.name = name;
      } else {
        throw TypeError;
      }
      return;
    }

    /**
     * [return the age in years]
     * @return {Number}         Difference in years between current date
     *                          and date of birth
     * @throws Error            Throws generic error if animal is dead
     * @throws ReferenceError   Throws if objects cannot be de-referenced
     */
    ageInYears() {
      // return error if the Animal class or child class is dead
      if (this.isDead) {
        throw Error;
      } else {
        // store the current date
        let age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        if (age !== undefined) {
          return age;
        } else {
          throw ReferenceError;
        }
      }
    }

    /**
     * [override Object.toString]
     * @return {String}       Name and date of birth from object instance
     * @throws ReferenceError Throws if objects cannot be de-referenced
     */
    toString() {
      let returnString = 'This animal\'s name is: ' +
      this.name + ' and the date of birth is: ' +
      this.dateOfBirth.getDate() + '/' +
      (this.dateOfBirth.getMonth() + 1) + '/' +
      this.dateOfBirth.getFullYear();
      if (typeof(returnString) === 'string') {
        return returnString;
      } else {
        throw ReferenceError;
      }
    }

    /**
     * [sets the death state of the Animal class or child classes]
     * @throws ReferenceError Throws if objects cannot be de-referenced
     * @return {void} [returns nothing]
     */
    expire() {
      // set isDead property to true
      this.isDead = true;
      if (!this.isDead) {
        throw ReferenceError;
      }
      else {
        return;
      }
    }
  };
}());
