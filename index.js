
const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');

const doggie = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFood: 'hot dogs'
};
const { name, breed } = doggie;

const doggieDetails = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFoods: {
    meats:{
      ham: 'smoked',
      hotDog: 'Oscar Meyer',
    },
    cheeses:{
      american: 'kraft'
    }
  }
};
const { ham, hotDog } = doggieDetails.favoriteFoods.meats;


const { furColor, activityLevel } = doggieDetails;
const { american: cheese } = doggieDetails.favoriteFoods.cheeses;


const colors = ['red', 'green', 'blue', 'yellow'];
const [, , primaryColor] = colors;


const user = {
  id: 1,
  name: 'John Doe',
  details: {
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown'
    }
  }
};
const {
  details: {
    address: { street, city }
  }
} = user;
