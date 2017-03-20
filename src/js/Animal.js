(function() {
  'use strict';

  // create namespace if is doesn't already exist
  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    /**
     * [parent class constructor]
     * @param  {String} name        [name of the Animal instance]
     * @param  {Date} dateOfBirth   [Date object storing date of birth]
     * @return {void}               [returns nothing]
     */
    constructor(name, dateOfBirth) {
      this.name = name;

      // if no date of birth provided,
      // assume this is a newborn animal
      // else accept the argument
      if (!(dateOfBirth instanceof Date)) {
        this.dateOfBirth = new Date();
      } else {
        this.dateOfBirth = dateOfBirth;
      }
    }

    /**
     * [set a value on the name for a class instance]
     * @param {void} void is returned
     */
    setName(name) {
      this.name = name;
      return;
    }

    /**
     * [return the date of birth for a class instance]
     * @return {Date} [return Date object]
     */
    getDob() {
      return this.dateOfBirth;
    }

    /**
     * [return the age in years]
     * @return {Number} [difference in years between current date
     *                   and date of birth]
     */
    ageInYears() {
      // store the current date
      let currentYear = new Date().getFullYear();
      return currentYear - this.dateOfBirth.getFullYear();
    }

    /**
     * [override Object.toString]
     * @return {String} [name and date of birth from object instance]
     */
    toString() {
      let returnString = 'This animal\'s name is: ' +
      this.name + ' and the date of birth is: ' +
      this.dateOfBirth.getDate() + '/' +
      (this.dateOfBirth.getMonth() + 1) + '/' +
      this.dateOfBirth.getFullYear();
      return returnString;
    }
  };

}());
