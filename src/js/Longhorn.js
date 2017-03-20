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
      super(name, dateOfBirth); // call the parent class constructor
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
     * @return {Longhorn}            [returning new Longhorn instance]
     */
    giveBirth(name, dateOfBirth) {
      return new Longhorn(name, dateOfBirth);
    }

    /**
     * [75% chance the animal will charge if you walk in front]
     * [Otherwise it will ignore you]
     * @param  {String}  position [caller's physical location]
     * @return {Boolean}          [Whether animal charged or not]
     */
    mayCharge(position) {
      let charge = false;
      if (position === 'in front') {
        if (Math.ceil(Math.random() * 100) > 25) {
          charge = true;
        }
      }
      return charge;
    }

    /**
     * [overrride Animal.toString()]
     * @return {void} [nothing is returned]
     */
    toString() {
      console.log('This animal\'s species is: ', this.species);
    }
  };
}());
