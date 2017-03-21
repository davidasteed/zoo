(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  // Komodo is a child of the Animal class
  window.zoo.Komodo = class Komodo extends Animal {
    /**
     * [Komodo class constructor]
     * @param  {String} name        [name of this instance of a Komodo]
     * @param  {Date}   dateOfBirth [date object storing Date of Birth]
     * @throws any.error            Propagates the error received from the parent class
     * @return {void}               [nothing is returned]
     */
    constructor(name, dateOfBirth) {
      // if the call to the base class constructor fails,
      // log error and propagate the error
      try {
        super(name, dateOfBirth);     // call the parent class constructor
      } catch (error){
        console.error('super() call to Animal constructor failed!');
        throw error;
      }
      // not testing the simple assignments below
      this.numEggs = 0;               // set initial number of eggs
      this.species = 'Komodo Dragon'; // common name for the species
    }

    /**
     * [Scientific name is unique to this species]
     * @return {String} [string containing scientific species]
     */
    static scientificName() {
      return 'Varanus komodoensis';
    }

    /**
     * [lay a random number of eggs between 1 and 10]
     * @throws Error            Throws generic error if Math function calls fail
     * @return {Number} [random number of up of 1-10 eggs]
     */
    layEggs() {
      // attempt to set value using Math object,
      // or propagate that error to caller
      try {
        this.numEggs = Math.ceil( Math.random() * 10 );
      } catch (error) {
        throw Error;
      }
      return this.numEggs;
    }

    /**
     * [50% chance the animal will chomp the leg]
     * [Ignore other body parts]
     * @param  {String} bodyPart [which body part]
     * @throws Error             Throws generic Error if Math calls fail
     * @return {Boolean}         [whether chomped or not]
     */
    reachToward(bodyPart) {
      let chomp = false;

      if (bodyPart === 'leg') {
        if (Math.ceil(Math.random() * 100) > 50) {
          chomp = true;
          // throw generic error if we failed to set chomp to true
          if (!chomp) {
            throw Error;
          }
        }
      }
      if (chomp === true) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * [override Animal.toString()]
     * @throws ReferenceError  Throws if this.species doesn't exist
     *                         or is unreachable
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
