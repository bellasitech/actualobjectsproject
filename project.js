import "style.css";

const characters = [
    { name: "Melanie", media: "Regretevator", alt: "melanie drawing", gender: "Girl", pronouns: "She/they", age: "Young adult", isOC: false, cost: 15.  },
    { name: "Battat", media: "Deltarune", alt: "battat drawing", gender: "Guy", pronouns: "He/him", age: "Adult", isOC: false, cost: 12 },
    { name: "Scag", media: "Regretevator", alt: "scag drawing", gender: "Girl", pronouns: "She/they", age: "Adult", isOC: false, cost: 13 },
    { name: "Kris", media: "Deltarune", alt: "kris drawing", gender: "Non-binary", pronouns: "They/them", age: "Teen", isOC: false, cost: 13  },
    { name: "Gambit", media: "X-men", alt: "gambit drawing", gender: "Guy", pronouns: "He/him", age:"Adult", isOC: false, cost: 13 },
    { name: "Adachi Rei", media: "Vocal Synth", alt: "rei drawing", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: false, cost: 12 },
    { name: "Vyren", media: "Astrolina", alt: "vyren drawing", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: true, cost: 16 },
    { name: "Valarie Lin", media: "Demon and Alien", alt: "valarie drawing", gender: "Girl", pronouns: "She/any", age:"Young adult", isOC: true, cost: 14 },
    { name: "Leo", media: "Astrolina", alt: "Alien", gender: "Guy", pronouns: "He/him", age:"Adult", isOC: true, cost: 11 },
    { name: "Vyren", media: "Astrolina", alt: "Alien", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: true, cost: 13 },
    { name: "Gumi Megpoid", media: "Vocal Synth", alt: "Human", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: false, cost: 15 },
    { name: "Tenna", media: "Deltarune", alt: "Tv Head", gender: "Guy", pronouns: "He/him", age: "Adult", isOC: false, cost: 13 },
    { name: "Rogue", media: "X-men", alt: "Mutant", gender: "Girl", pronouns: "She/her", age: "Adult", isOC: false, cost: 11 },
    { name: "Forest", media: "Astrolina", alt: "Human", gender: "Guy",  age: "Adult", isOC: true, cost: 13 },
    { name: "Kasane Teto", media: "Vocal Synth", alt: "Chimera", gender: "Girl",  age: "Adult", isOC: false, cost: 14 },
    { name: "Prototype", media: "Regretevator", alt: "Robot", gender: "Non-binary", age: "Young adult", isOC: false, cost: 13 },
    { name: "Queen", media: "Deltarune", alt: "queen drawing", gender: "Girl",  age: "Adult", isOC: false, cost: 11 },
    { name: "Alice", media: "Astrolina", alt: "alice drawing", gender: "Girl", age: "Adult", isOC: true, cost: 13 },
    { name: "Infected", media: "Regretevator", alt: "infected drawing", gender: "Guy", age: "Young adult", isOC: false, cost: 16 },
    { name: "Kagamine Rin", media: "Vocal Synth", alt: "rin drawing", gender: "Girl", age: "Young adult", isOC: false, cost: 15 },
];

const container = document.querySelector(".card-container");

characters.forEach((character) => {
  container.insertAdjacentHTML(
    "beforeend",
    ` <div class ="card"${
      character.media
      }" data-title="${character.name}">
        <figure>
          <img
            class="image"
            src="${character.image}"
            alt="${character.alt}"
          />
        </figure>
       <div class="card-body">
          <h2 class="card-title">${character.name}</h2>
          <p>$${character.cost.toFixed(2)}</p>
          <div class="card">
            <button class="button">add to cart</button>
          </div>
        </div>
      </div>
      `
    );
});












function findName(characters, targetname) {
  const foundCharacter = characters.find((character) => character.name = targetname )
  return foundCharacter.name;
  }
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