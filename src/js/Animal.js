(function() {
  'use strict';

  // create namespace if is doesn't already exist
  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    /**
     * [parent class constructor]
     * @param  {String} name        [name of the Animal instance]
     * @param  {Date} dateOfBirth   [Date object storing date of birth]
     * @throws TypeError            Throws if data type is incorrect
     * @return {void}               [returns nothing]
     */
    constructor(name, dateOfBirth) {
      // error handling for name argument
      if (typeof(name) === 'string') {
        this.name = name;
      } else {
        throw TypeError;
      }

      // error handling for dateOfBirth
      if (dateOfBirth instanceof Date) {
        this.dateOfBirth = dateOfBirth;
      } else if (dateOfBirth === undefined) {
        this.dateOfBirth = new Date();
      } else {
        throw TypeError;
      }
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
     * @throws ReferenceError   Throws if objects cannot be de-referenced
     */
    ageInYears() {
      // store the current date
      let age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
      if (age !== undefined) {
        return age;
      } else {
        throw ReferenceError;
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
  };

}());
