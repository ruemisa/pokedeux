// API GET request
// created a global trainer object
// Notes: 3 separate requests. Long API calls. it works smoothly if all data has been called.

let pokemonArr = [];

let Strewbs = {
  all: function() {
    // console.log(Strewbs.pokemon);
    pokemonArr = Object.entries(Strewbs.pokemon);
    return pokemonArr;
  },

  get: function(name) {
    var name = name.toLowerCase();
    return Strewbs['pokemon'][name];
  }

};

// VAPOREON

const vaporRequest = new XMLHttpRequest();
//2018.7.24 No onreadystatechange or readystate if statment needed!
vaporRequest.onload = function() {
  const vaporData = JSON.parse(this.response); //manage data in a readable code
    console.log(vaporData);      // helps me read data through console

    Strewbs.pokemon = {   // created pokemon obj to house the pokemons inside trainer obj
      vaporeon: {
        hp: vaporData['stats'][5]['base_stat'],
        attack: vaporData['stats'][4]['base_stat'],
        defense: vaporData['stats'][3]['base_stat'],
        abilities: [vaporData['abilities'][0]['ability']['name'], vaporData['abilities'][1]['ability']['name']],
        sprites: vaporData['sprites']['front_default'],
      }
    };

}
// API request
vaporRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/134/", true);
vaporRequest.send();

// JOLTEON

const jolteonRequest = new XMLHttpRequest();

jolteonRequest.onload = function() {
  const jolteonData = JSON.parse(this.response);
    console.log(jolteonData);

    Strewbs['pokemon']['jolteon'] = {
      hp: jolteonData['stats'][5]['base_stat'],
      attack: jolteonData['stats'][4]['base_stat'],
      defense: jolteonData['stats'][3]['base_stat'],
      abilities: [jolteonData['abilities'][0]['ability']['name'], jolteonData['abilities'][1]['ability']['name']],
      sprites: jolteonData['sprites']['front_default'],
    };

}
jolteonRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/135/", true);
jolteonRequest.send();

// FLAREON

const flareonRequest = new XMLHttpRequest();

flareonRequest.onload = function() {
  const flareonData = JSON.parse(this.response);
    console.log(flareonData);

    Strewbs['pokemon']['flareon'] = {
      hp: flareonData['stats'][5]['base_stat'],
      attack: flareonData['stats'][4]['base_stat'],
      defense: flareonData['stats'][3]['base_stat'],
      abilities: [flareonData['abilities'][0]['ability']['name'], flareonData['abilities'][1]['ability']['name']],
      sprites: flareonData['sprites']['front_default'],
    };

}
flareonRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/136/", true);
flareonRequest.send();


// This DISPLAYS the Stats Sheet through a modal when clicked on the pokemon card panel

// arrayname = pokermonArr;

// DISPLAY Pokemon

const openDisplay = (name) => { // argument through choices in HTML
  Strewbs.get(name);  // to display object properties of target
  Strewbs.all();  // to place all pokemon in an array
  array = pokemonArr;  // to this array
  let i; // access pokemon count through the array above

  document.getElementById('displayBox').style.display = "block";
  document.getElementById('displayStats').style.color = "black";

  if (name === 'Vaporeon') {
    document.getElementById('displayStats').style.background = "center / cover no-repeat url('images/vaporeon.gif')";
    let text = document.getElementById('bio');
    text.innerHTML = "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.";
    i = 0;
  } else if (name === 'Jolteon') {
    document.getElementById('displayStats').style.background = "center / cover no-repeat url('images/jolteon.gif')";
    let text = document.getElementById('bio');
    text.innerHTML = "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.";
    i = 1;
  } else if (name === 'Flareon') {
    document.getElementById('displayStats').style.background = "center / cover no-repeat url('images/flareon.gif')";
    let text = document.getElementById('bio');
    text.innerHTML = "Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.";
    i = 2;
  } else {
    console.log('Please choose the following: Vaporeon, Jolteon, or Flareon');
  }

  // let stats = document.getElementById('displayStats');

  let pokeName = document.getElementById('name');
  pokeName.innerHTML = array[i][0];

  let image = document.getElementById('image');
  image.src = array[i][1]['sprites'];

  let hp = document.getElementById('hp');
  hp.innerHTML = "hp: " + array[i][1]['hp'];

  let attack = document.getElementById('attack');
  attack.innerHTML = "attack: " + array[i][1]['attack'];

  let defense = document.getElementById('defense');
  defense.innerHTML = "defense: " + array[i][1]['attack'];

  let abilities = document.getElementById('abilities');
  abilities.innerHTML = "Abilities";

  let one = document.getElementById('abilOne');
  one.innerHTML = array[i][1]['abilities'][0];

  let two = document.getElementById('abilTwo');
  two.innerHTML = array[i][1]['abilities'][1];
}


// To close Modal

const closeDisplay = () => {
  document.getElementById('displayBox').style.display = "none";
}

// Iritating battle button

// function frustration() {
//   document.getElementById('blank').style.display = "none";
//   document.body.style.background = "center / cover no-repeat url('images/eevee.gif')";
//   document.body.style.height = "100vh";
// }
