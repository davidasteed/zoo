(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  // Longhorn is a child of the Animal class
  window.zoo.Longhorn = class Longhorn extends Animal {
    /**
     * [constructor for Longhorn]
     * @param  {String} name        [name of this instance of Longhorn]
     * @param  {Date}   dateOfBirth [Date object containing date of birth]
     * @return {void}               [nothing is returned]
     */
    constructor(name, dateOfBirth) {
      // if the call to the base class constructor fails,
      // catch error and log a message to the console, 
      // but do not halt the program
      try {
        super(name, dateOfBirth); // call the parent class constructor
      } catch (error) {
        console.error('super() call to Animal constructor failed!');
      }
      this.species = 'Texas Longhorn';
    }

    // Scientific name is unique to this species
    /**
     * [Scientific name is unique to this species]
     * @return {String} [The scientific name is returned as a string]
     */
    static scientificName() {
      return 'Bos taurus';
    }

    /**
     * [give birth]
     * @param  {String}  name        [name string]
     * @param  {Date}    dateOfBirth [Date of Birth]
     * @throws ReferenceError        If constructor call fails
     * @return {Longhorn}            [returning new Longhorn instance]
     */
    giveBirth(name, dateOfBirth) {
      let newLonghorn = new Longhorn(name, dateOfBirth);
      // only return the new instance if constructor call was successful
      if (newLonghorn) {
        return newLonghorn;
      } else {
        throw ReferenceError;
      }
    }

    /**
     * [75% chance the animal will charge if you walk in front]
     * [Otherwise it will ignore you]
     * @param  {String}  position [caller's physical location]
     * @throws Error              Throws generic Error if Math calls fail
     * @return {Boolean}          [Whether animal charged or not]
     */
    mayCharge(position) {
      let charge = false;
      if (position === 'in front') {
        if (Math.ceil(Math.random() * 100) > 25) {
          charge = true;
          // throw generic error if we failed to set charge to true
          if (!charge) {
            throw Error;
          }
        }
      }
      return charge;
    }

    /**
     * [overrride Animal.toString()]
     * @throws ReferenceError  Throws if this.species doesn't exist
     * @return {void} [nothing is returned]
     */
    toString() {
      if (!this.species) {
        throw ReferenceError;
      } else {
        console.log('This animal\'s species is: ', this.species);
      }
    }
  };
}());
