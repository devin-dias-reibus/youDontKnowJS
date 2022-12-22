// Working with arrays
let animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
];

// const run = () => {
//   // animals.push(5);
//   // return (animals);
//   const animals = 5;
//   return (animals);
// };
// run();
// const run = (a) => {
//   a = 5;
//   return a;
// }
// console.log(run(animals));
// run(animals)
// animals = 5;
// console.log(animals);

// reading on array methods. we will use them to make some pure functions and some side effects
// https://www.telerik.com/blogs/pure-functions-side-effects-javascript
// const AllAnimals = [];
// const allAnimalsThatbeginWithR = [];

// STOP Here, whats you're status ? are you on your own new feature branch ?

// I want to do an intitial commit - some more changes

//using side effects ( mutate something outside of scope) to populate allAnimals with the original animals array
// foreach
const AllAnimals = animals;
//now take allAnimals and populate allAnimalsThatbeginWithR
// const allAnimalsThatBeginWithR = AllAnimals.filter(
//   (animal) => animal[0] === "R"
// );
// console.log(allAnimalsThatBeginWithR);
// const obj = {
//   run: (log) => console.log(log),
// };
// obj.run("devin is the best");
// animals.forEach((item, index, array) => {
//   animals[index] = 5;
// });
// console.log(animals);
const walk = animals.map((i) => i)
console.log(walk);
console.log(walk);
// console.log(animals.prototype);
// filter
// Now create a new array without creating a sideeffect that is all animals that begin with R,  but now you have to remove the R "map"
// I would read about filter, foreach and map here

//very tough extra credit. Take the orignal array and turn it into and object where each key is the animals names and the value is an array of all the animals which start with th same letter
//This will be reduce, you will neeed to look at this
// https://stackoverflow.com/questions/15748656/javascript-reduce-on-object
// https://stackoverflow.com/questions/44683789/using-spread-notation-in-array-reduce

//now take our original array and turn it into an object keys by animals with

// ====================================================================================================================================================================
// Working with Objects

const starwarsCategorized = {
  Name: ["Anakin", "Amidala", "R2-D2"],
  Gender: ["male", "female", "they/them"],
  Homeworld: ["Tatooine", "Naboo", "Tatooine"],
  Born: ["41.9BBY", "46BBY", "19BBY"],
  Jedi: ["yes", "no", "no"],
};

//   Pay attention I am trying to trick you here
// https://www.knowledgehut.com/blog/web-development/json-in-javascript
// now you know 2 languages !

// take the above object and build this array

// [
//     {
//      "Name": "Anakin",
//      "Gender": "male",
//      "Jedi": "yes",
//      "born": "41.9BBY"

//     },
//     {
//      "Name": "Amidala",
//      "Gender": "female",
//      "Homeworld": "Naboo",
//      "Born": 46BBY",
//      "Jedi": "no"
//     },
//     ...
//     {
//      "Name": "R2-D2",
//      "Gender": "unknown",
//      "Homeworld": "Naboo",
//      "Born": "19BBY",
//      "Jedi": "no"
//     }
// ]

// now here is some less work just run these peices of code individually bt first thing what you will expect to see

console.log([] === []);

console.log({} === {});

console.log(5 == "5");

console.log(5 === "5");

console.log("" === false);

console.log(typeof [1, 2, 3]);

// understanding falsy vs truthy quirks
console.log(0 === true);
console.log("" === true);
console.log("rwgt" === true);

// This is to expose you to a big but purposful flaw in javascript

// typecoercion

// https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

//dont feel like you have to follow this word for word. try adding a version to the file name and keeping versions if you want to play arround
