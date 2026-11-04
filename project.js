const characters = [
    { name: "Melanie", media: "Regretevator", species: "Tv Head", gender: "Girl", pronouns: "She/they", age: "Young adult", isOC: false, cost: 15 },
    { name: "Battat", media: "Deltarune", species: "Die", gender: "Guy", pronouns: "He/him", age: "Adult", isOC: false, cost: 12 },
    { name: "Scag", media: "Regretevator", species: "Computer", gender: "Girl", pronouns: "She/they", age: "Adult", isOC: false, cost: 13 },
    { name: "Kris", media: "Deltarune", species: "Human", gender: "Non-binary", pronouns: "They/them", age: "Teen", isOC: false, cost: 13  },
    { name: "Gambit", media: "X-men", species: "Mutant", gender: "Guy", pronouns: "He/him", age:"Adult", isOC: false, cost: 13 },
    { name: "Adachi Rei", media: "Vocal Synth", species: "Robot", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: false, cost: 12 },
    { name: "Vyren", media: "Astrolina", species: "Alien", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: true, cost: 16 },
    { name: "Valarie Lin", media: "Demon and Alien", species: "Human", gender: "Girl", pronouns: "She/any", age:"Young adult", isOC: true, cost: 14 },
    { name: "Leo", media: "Astrolina", species: "Alien", gender: "Guy", pronouns: "He/him", age:"Adult", isOC: true, cost: 11 },
    { name: "Vyren", media: "Astrolina", species: "Alien", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: true, cost: 13 },
    { name: "Gumi Megpoid", media: "Vocal Synth", species: "Human", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: false, cost: 15 },
    { name: "Tenna", media: "Deltarune", species: "Tv Head", gender: "Guy", pronouns: "He/him", age: "Adult", isOC: false, cost: 13 },
    { name: "Rogue", media: "X-men", species: "Mutant", gender: "Girl", pronouns: "She/her", age: "Adult", isOC: false, cost: 11 },
    { name: "Forest", media: "Astrolina", species: "Human", gender: "Guy",  age: "Adult", isOC: true, cost: 13 },
    { name: "Kasane Teto", media: "Vocal Synth", species: "Chimera", gender: "Girl",  age: "Adult", isOC: false, cost: 14 },
    { name: "Prototype", media: "Regretevator", species: "Robot", gender: "Non-binary", age: "Young adult", isOC: false, cost: 13 },
    { name: "Queen", media: "Deltarune", species: "Robot", gender: "Girl",  age: "Adult", isOC: false, cost: 11 },
    { name: "Alice", media: "Astrolina", species: "Human", gender: "Girl", age: "Adult", isOC: true, cost: 13 },
    { name: "Infected", media: "Regretevator", species: "Human", gender: "Guy", age: "Young adult", isOC: false, cost: 16 },
    { name: "Kagamine Rin", media: "Vocal Synth", species: "Human", gender: "Girl", age: "Young adult", isOC: false, cost: 15 },
];

function FiltersMedia(characters, search) {
  const filterCharacter = characters.filter((character)=> character.media === search);
  return filterCharacter; 
}
function FiltersSpecies(characters, search) {
  const filterCharacter = characters.filter((character)=> character.species === search);
  return filterCharacter; 
}
function FiltersGender(characters, search) {
  const filterCharacter = characters.filter((character)=> character.gender === search);
  return filterCharacter; 
}
function FiltersAge(characters, search) {
  const filterCharacter = characters.filter((character)=> character.age === search);
  return filterCharacter; 
}
function isOC(characters, search) {
  const filterCharacter = characters.filter((character)=> character.isOC === search);
  return filterCharacter; 
}

/* console.log(FiltersMedia(characters, "X-men"));
 */

const cart = [{}];

function AddCart (characters,item) {
  const findCharacter = characters.find((character) => character.name === item)
  cart.push(findCharacter);
  return((item) + " added to cart");
}
console.log(AddCart(characters, "Melanie"))
console.log(AddCart(characters,"Kris"))


function RemoveCart (item) {
  const findCharacter = characters.find((character) => character.name === item)
  cart.pop(findCharacter);
  return((item) + " removed from cart");
}

//Create a list of at least 20 items to sell
//Filter what products are shown with button clicks (clicks added later!)
//Allow users to add to a cart
//Remove Items from cart
//Provide users a total for their purchase

function sumTotal(cart) {
  let total = 0;
  cart.forEach((item) => {
    if (item && typeof item.cost === "number") {
      total += item.cost;
    }
  });
  return total;
}

console.log(sumTotal(cart));