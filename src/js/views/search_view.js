// Imported query selectors file (base)
import { el } from '../base';

// To grab user input
export const inputHandler = () => el.searchInput.value;
    

// To clear user input once search request is called
export const clearInput = () => {
    el.searchInput.value = '';
};

// For element render of pokemon data
const displayPokemon = pokemon => {
    // Pokemon Type (grass, etc..)
    let pokemonType = pokemon.types.map( t => {
        return t.type.name;
    });

    // Rendered markup 
    const markup = `
        <a class="results__link results__link--active" href="#${pokemon.id}">
            <figure class="results__fig">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name} sprite" class="results__img"> 
            </figure>    
            <div class="results__text">
                <h4 class="results__name">${pokemon.id} ${pokemon.name}</h4>
                <ul class="results__list">
                    ${pokemonType.map( t => {
                        return `<li>${t}</li>`;
                    }).join('')}
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

