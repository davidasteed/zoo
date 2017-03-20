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
      super(name, dateOfBirth);       // call the parent class constructor

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
     * @return {Number} [random number of up of 1-10 eggs]
     */
    layEggs() {
      this.numEggs = Math.ceil( Math.random() * 10 );
      return this.numEggs;
    }

    /**
     * [50% chance the animal will chomp the leg]
     * [Ignore other body parts]
     * @param  {String} bodyPart [which body part]
     * @return {Boolean}         [whether chomped or not]
     */
    reachToward(bodyPart) {
      let chomp = false;
      if (bodyPart === 'leg') {
        if (Math.ceil(Math.random() * 100) > 50) {
          chomp = true;
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
     * @return {void} [nothing is returned]
     */
    toString() {
      console.log('This animal\'s species is: ', this.species);
    }
  };
}());
