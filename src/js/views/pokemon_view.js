import { el } from '../base';

// Render Pokemon Details to UI
export const renderPokemon = (pokemon, isSaved) => {
    // For Abilities list
    let abilities = [];
    
    pokemon.abilities.forEach( abil => {
        // console.log(abil);
        abilities.push(`<li>${abil}</li>`);
    })
    
    // Markup for Details
    const markup = `
        <figure class="pokemon__fig">
            <img src="${pokemon.img}" alt="pokemon image" class="pokemon__img">
        </figure>
        <h3 class="pokemon__name">${pokemon.name}</h3>
        <div class="pokemon__stats">
            <p class="pokemon__para">HP: ${pokemon.hp} </p>
            <p class="pokemon__para">DEF: ${pokemon.def}</p>
            <p class="pokemon__para">ATT: ${pokemon.att}</p>
            <ul class="pokemon__abilities">
                ${abilities}
            </ul>
        </div>
        <button class="pokemon__save btn">
            ${isSaved ? 'Remove from Vault' : 'Add to Vault'}
        </button>
        <button class="pokemon__btn btn">
            Add
        </button>
    `;

    el.pokemonRender.insertAdjacentHTML('afterbegin', markup);
};

// Clearing pokemon details upon click of other pokemon from search result
export const clearPokemon = () => {
    el.pokemonRender.innerHTML = '';
}

