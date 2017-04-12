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
     * @return {void}               [nothing is returned]
     */
    constructor(name, dateOfBirth) {
      // if the call to the base class constructor fails,
      // if constructor fails, log error and
      // print error message to the console
      // do not halt the program
      try {
        super(name, dateOfBirth);     // call the parent class constructor
      } catch (error){
        console.error('super() call to Animal constructor failed!');
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
     * @throws Error            Throws error if Math function calls *                          fail
     * @return {Number} [random number of up of 1-10 eggs]
     */
    layEggs() {
      // attempt to set value using Math object,
      // and catch and error and log error message if it fails.
      // propagate error to the caller
      try {
        this.numEggs = Math.ceil( Math.random() * 10 );
      } catch (error) {
        console.error('Call to Math functions failed!');
        throw error;
      }
      return this.numEggs;
    }

    /**
     * [50% chance the animal will chomp the leg]
     * [Ignore other body parts]
     * @param  {String} bodyPart [which body part]
     * @return {Boolean}         [whether chomped or not]
     */
    reachToward(bodyPart) {
      if (bodyPart === 'leg') {
        if (Math.ceil(Math.random() * 100) > 50) {
          return true;
        } else {
          return false;
        }
      }
      return false;
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
