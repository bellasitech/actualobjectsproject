

const characters = [
    { name: "Melanie", media: "Regretevator", alt: "melanie drawing", image: "Girl", cost: 15.  },
    { name: "Battat", media: "Deltarune", alt: "battat drawing", gender: "Guy",  cost: 12 },
    { name: "Scag", media: "Regretevator", alt: "scag drawing", image: "Girl",  cost: 13 },
    { name: "Kris", media: "Deltarune", alt: "kris drawing", image: "Non-binary",  cost: 13  },
    { name: "Gambit", media: "X-men", alt: "gambit drawing", image: "Guy", cost: 13 },
    { name: "Adachi Rei", media: "Vocal Synth", alt: "rei drawing", image: "Girl", cost: 12 },
    { name: "Vyren", media: "Astrolina", alt: "vyren drawing", image: "Girl",   cost: 16 },
    { name: "Valarie Lin", media: "Demon and Alien", alt: "valarie drawing", image: "Girl",  cost: 14 },
    { name: "Leo", media: "Astrolina", alt: "leo drawing", image: "Guy",  cost: 11 },
    { name: "hatsune miku", media: "vocal synth", alt: "miku drawing", image: "Girl",   cost: 13 },
    { name: "Gumi Megpoid", media: "Vocal Synth", alt: "gumi drawing", image: "Girl",    cost: 15 },
    { name: "Tenna", media: "Deltarune", alt: "Tenna drawing", image: "Guy", cost: 13 },
    { name: "Rogue", media: "X-men", alt: "rogue drawing", image: "Girl", cost: 11 },
    { name: "Forest", media: "Astrolina", alt: "forest drawing", image: "Guy",   cost: 13 },
    { name: "Kasane Teto", media: "Vocal Synth", alt: "teto drawing", image: "Girl",    cost: 14 },
    { name: "Prototype", media: "Regretevator", alt: "prototype drawing", image: "Non-binary",   cost: 13 },
    { name: "Queen", media: "Deltarune", alt: "queen drawing", image: "Girl",   cost: 11 },
    { name: "Alice", media: "Astrolina", alt: "alice drawing", image: "Girl", cost: 13 },
    { name: "Infected", media: "Regretevator", alt: "infected drawing", image: "Guy",  cost: 16 },
    { name: "Kagamine Rin", media: "Vocal Synth", alt: "rin drawing", image: "Girl",   cost: 15 },
];


const container = document.querySelector(".flex");
  characters.forEach((character) => {
    container.insertAdjacentHTML(
      "afterbegin",
      ` 
        <div class ="card">
          <h2 class ="card-title">${character.name}</h2>
          <figure>
            <img class="image" src="${character.image}" alt="${character.alt}">
          </figure>
          <button class="button"> add to cart </button>
          <p class ="card-price">${character.cost}</p>
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