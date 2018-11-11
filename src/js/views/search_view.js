// Imported query selectors file (base)
import { el } from '../base';

// To grab user input
export const inputHandler = () => el.searchInput.value;
    

// To clear user input once search request is called
export const clearInput = () => {
    el.searchInput.value = '';
};

// TODO: DOUBLE CHECK ALL RENDERS
// For element render of pokemon data
const displayPokemon = pokemon => {
    // Pokemon Type (grass, etc..)
    const pokemonType = pokemon.types.forEach( type => {
        `<li class="results__item>${type.name}</li>`
    });

    // Rendered markup 
    const markup = `
        <a class="results__link results__link--active" href="#${pokemon.id}">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name} sprite" class="results__img"> 
            <div class="results__text">
                <h4 class="results__name">${pokemon.id} ${pokemon.name}</h4>
                <ul class="results__list">
                    ${pokemonType}
                </ul>
            </div>
        </a>
    `;

    // Insert rendered markup to detail
    el.resultRender.insertAdjacentHTML('beforeend', markup);

};

// Display Query Result in UI
export const displayResult = pokemon => {
    displayPokemon(pokemon);
};

// Clear Query Result upon new Search Query
export const clearResult = () => {
    el.resultRender.innerHTML = '';
};

