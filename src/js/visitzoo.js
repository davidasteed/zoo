(function() {
  'use strict';

  let Animal = window.zoo.Animal;
  let Komodo = window.zoo.Komodo;
  let Longhorn = window.zoo.Longhorn;

  //
  // Animal class validation
  //

  // catch attempt to create Animal with an invalid data type for 'name'
  let errorValue = [1, 2, 3];
  try {
    let errorAnimal1 = new Animal(errorValue);
  } catch(warning) {
    console.warn('New Animal with erroneous name of datatype Array failed as expected');
  }

  // catch attempt to create Animal with an invalid date of birth value
  try {
    let errorAnimal2 = new Animal('errorAnimal2', errorValue);
  } catch (warning) {
    console.warn('New Animal with incorrect date of birth failed as expected');
  }

  // create a new Animal, with no date of birth provided
  let myAnimal;
  try {
    myAnimal = new Animal('Stegosaurus');
  } catch (error) {
    console.error('Failed to create new Animal with no date of birth provided!');
  }

  // get the name and get date of birth
  try {
    console.log('The new Animal\'s name is ', myAnimal.name);
    console.log('The new Animal\'s date of birth is ', myAnimal.dateOfBirth.getFullYear());
  } catch (error) {
    console.error('Failed to print new Animal name and date of birth!');
  }

  // attempt to set an invalid name for the Animal
  try {
    myAnimal.setName([1,3,5]);
  } catch (warn) {
    console.warn('Failed to set the Animal name to an array, as expected');
  }

  // get/set the Animal's name
  try {
    myAnimal.setName('Darius');
    console.log('The new Animal now has a name of ', myAnimal.name);
  } catch (error) {
    console.error('Failed to set/get the Animal name!');
  }

  // obtain the age in years for an animal born in the year 1000
  let olderAnimal;
  try {
    olderAnimal = new Animal('Lordly', new Date('1/1/1000'));
    console.log('The older animal is ', olderAnimal.ageInYears(), ' years old.');
  } catch (error) {
    console.error('Failed to create a new Animal and call ageInYears()!');
  }

  // print out the name and date of birth with a method:
  try {
    console.log('The older Animal\'s name and date of birth are:');
    console.log(olderAnimal.toString());
  } catch (error) {
    console.error('Failed to call toString for class Animal!');
  }

  //
  // Komodo class validation
  //

  // create a new Komodo
  let myKomodo;
  try {
    myKomodo = new Komodo('Big Dragon', new Date('10/10/1999'));
  } catch (error) {
    console.error('Failed to create new Komodo class instance!');
  }

  // confirm that the parent class constructor was invoked
  let myKomodoName;
  try {
    myKomodoName = myKomodo.name;
    console.log('The new Komodo is named:', myKomodoName);
    console.log('The new Komodo was born on', myKomodo.dateOfBirth.getFullYear());
  } catch (error) {
    console.error('Failed to print name and year of the new Komodo!');
  }

  // print out the scientific name
  try {
    console.log('The scientific name of a Komodo is:', Komodo.scientificName());
  } catch (error) {
    console.error('Failed to access and print the Komodo\'s scientific name!');
  }

  // lay some eggs
  try {
    console.log(myKomodoName, 'laid ', myKomodo.layEggs(), 'eggs.');
  } catch (error) {
    console.error('Failed to lay eggs!');
  }

  // see if the Komodo will chomp a body part
  try {
    let bodyPart = 'leg';
    console.log(myKomodoName, 'was given a chance to chomp my', bodyPart);
    if (myKomodo.reachToward(bodyPart)) {
      console.log('and indeed chomped on it!');
    } else {
      console.log('but chose not to!');
    }
    bodyPart = 'hand';
    console.log('It is always', myKomodo.reachToward(bodyPart),
    'that', myKomodoName, 'would choose to chomp on my',bodyPart + '.');
  } catch (error) {
    console.error('Failure to evaluate if', myKomodoName, 'chomped a body part!');
  }

  //
  // Longhorn class validation
  //

  // create a new longhorn
  let myLonghorn;
  try {
    myLonghorn = new Longhorn('Momma Longhorn', new Date('5/5/1995'));
  } catch (error) {
    console.error('Failed to create a new Longhorn!');
  }

  // confirm that the parent class constructor was invoked
  let myLonghornName;
  try {
    myLonghornName = myLonghorn.name;
    console.log('The new Longhorn name is:', myLonghornName);
    console.log('The new Longhorn was born on', myLonghorn.dateOfBirth.getFullYear());
  } catch (error) {
    console.error('');
  }

  // print out the scientific name
  try {
    console.log('The scienfific name of a Longhorn is:', Longhorn.scientificName());
  } catch (error) {
    console.error('Failed to access and print the Longhorn\'s scientific name!');
  }

  // attempt to have baby longhorns
  try {
    let lilLonghorn = myLonghorn.giveBirth('Lil\' Longhorn');
    console.log(myLonghornName, 'gave birth to', lilLonghorn.name,
    'born on', lilLonghorn.dateOfBirth.getFullYear());
  } catch (error) {
    console.error('Failed to make baby Longhorns!');
  }

  // see if the Longhorn will charge
  try {
    let position = 'in front';
    console.log(myLonghornName, 'saw me walk', position, 'of it and');
    if (myLonghorn.mayCharge(position)) {
      console.log('chose to charge!');
    } else {
      console.log('stayed put.');
    }
    position = 'on the side';
    console.log('It is', myLonghorn.mayCharge(position),
    'that', myLonghornName, 'would ever charge if I stay',
    position);
  } catch (error) {
    console.error('Failure to evaluate if ', myLonghorn, 'will charge!');
  }

  // test if a child class instance dies,
  // that an Error object should be thrown if
  // someone asks for the age

  // Komodo dies
  try {
    myKomodo.expire();
    console.log(myKomodoName, 'has died.');
  } catch (error) {
    console.error('Failure to change the death state of', myKomodoName);
  }

  // Attempt to obtain the Komodo's age (should fail)
  try {
    console.log('The', myKomodoName + '\'s age is', myKomodo.ageInYears());
  } catch (warn) {
    console.warn('Since', myKomodoName, 'has died, the attempt to obtain the age failed, as expected');
  }

  //
  // Validate that a living Komodo can have the age retrieved
  //

  // Komodo is living again
  try {
    myKomodo.isDead = false;
    console.log(myKomodoName, 'comes back to life.');
  } catch (error) {
    console.error('Failure to change the dead state of ', myKomodoName);
  }

  // Attempt to obtain the Komodo's age (should succeed)
  try {
    console.log('The living', myKomodo.name + '\'s age is', myKomodo.ageInYears());
  } catch (warn) {
    console.warn('Since the Komodo has died, the attempt to obtain the age failed, as expected');
  }
}());
