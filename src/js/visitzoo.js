(function() {
  'use strict';

  let Animal = window.zoo.Animal;
  let Komodo = window.zoo.Komodo;
  let Longhorn = window.zoo.Longhorn;

  //
  // Animal class validation
  //

  // create a new Animal, with no date of birth provided
  let myAnimal = new Animal('Stegosaurus');

  // get the name and get date of birth
  console.log('The new animal\'s name is ', myAnimal.name);
  console.log('The new animal\'s date of birth is ', myAnimal.dateOfBirth.getFullYear());

  // get/set the animal's name
  myAnimal.setName('Darius');
  console.log('The new animal now has a name of ', myAnimal.name);

  // obtain the age in years for an animal born in the year 1000
  let olderAnimal = new Animal('Lordly', new Date('1/1/1000'));
  console.log('The older animal is ', olderAnimal.ageInYears(), ' years old.');

  // print out the name and date of birth with a method:
  console.log('The older animal\'s name and date of birth are:');
  console.log(olderAnimal.toString());

  //
  // Komodo class validation
  //

  // create a new Komodo
  let myKomodo = new Komodo('Big Dragon', new Date('10/10/1999'));

  // confirm that the parent class constructor was invoked
  let myKomodoName = myKomodo.name;
  console.log('The new Komodo is named:', myKomodoName);
  console.log('The new Komodo was born on', myKomodo.dateOfBirth.getFullYear());

  // print out the scientific name
  console.log('The scientific name of a Komodo is:', Komodo.scientificName());

  // lay some eggs
  console.log(myKomodoName, 'laid ', myKomodo.layEggs(), 'eggs.');

  // see if the Komodo will chomp a body part
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

  //
  // Longhorn class validation
  //

  // create a new longhorn
  let myLonghorn = new Longhorn('Momma Longhorn', new Date('5/5/1995'));

  // confirm that the parent class constructor was invoked
  let myLonghornName = myLonghorn.name;
  console.log('The new Longhorn name is:', myLonghornName);
  console.log('The new Longhorn was born on', myLonghorn.dateOfBirth.getFullYear());

  // print out the scientific name
  console.log('The scienfific name of a Longhorn is:', Longhorn.scientificName());

  // attempt to have baby longhorns
  let lilLonghorn = myLonghorn.giveBirth('Lil\' Longhorn');
  console.log(myLonghornName, 'gave birth to', lilLonghorn.name,
  'born on', lilLonghorn.dateOfBirth.getFullYear());

  // see if the Longhorn will charge
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

}());
