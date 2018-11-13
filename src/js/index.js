// Imported query selectors file (base)
import { el, displaySpinner, clearSpinner } from './base';

// Models
import Search from './models/Search';
import Pokemon from './models/Pokemon';
import Cart from './models/Cart';

// Views
import * as search_view from './views/search_view';
import * as pokemon_view from './views/pokemon_view';
import * as cart_view from './views/cart_view';

// APPLICATION STATE 
const state = {};
// SEARCH CONTROLLER 

// Callback for Search
const searchCtrl = async () => {
    // Get query from view
    const query = search_view.inputHandler(); 

    if (query) {
        // Add search object to state
        state.search = new Search(query);

        // Clear user Input and Previous Result before loading spinner
        search_view.clearInput();
        search_view.clearResult();
        // Prepare UI for results (add loading spinner here)
        displaySpinner(el.searchResult);
        
        try {
            // Get results of search query
            await state.search.getData();

            // Render needed data on UI 
            clearSpinner();
            search_view.displayResult(state.search.data);

        } catch (error) {
            // TODO: Add HTML for error
            clearSpinner();
            console.log(error);
        };

    };
};

// For Search Controller (search submission)
el.searchForm.addEventListener('submit', e => {
    // We don't want no reloads man
    e.preventDefault();
    searchCtrl();
});

//-----------------------------------------//
//-----------------------------------------//
//-----------------------------------------//


// CURRENT POKEMON CONTROLLER
const pokemonCtrl = async () => {
    // Store pokemon ID minus hash upon click
    const id = window.location.hash.replace('#', '');
    // Only do it if there is id
    if (id) {
        // Prepare UI for data
        pokemon_view.clearPokemon();
        displaySpinner(el.pokemon);
        // Create new Pokemon Object
        state.pokemon = new Pokemon(id);
        // To handle errors gracefully in case something goes wrong
        try {
            // Get the data
            await state.pokemon.getPokemon();
            // Render to UI
            clearSpinner();
            pokemon_view.renderPokemon(state.pokemon);
        } catch (error) {
            // TODO: Add HTML for error
            console.log(error);
        };
        console.log(state.pokemon);
        
    };
};

// UI events for Current Pokemon Controller
const pokemonCtrlEvents = ['hashchange', 'load'];

pokemonCtrlEvents.forEach(e => {
    window.addEventListener(e, pokemonCtrl);
});

// Adding Pokemon to Cart
el.pokemonRender.addEventListener('click', e => {
    // Matches class and all child el
    if (e.target.matches('.pokemon__btn, .pokemon__btn *')) {
        cartCtrl();
    } 
});

//-----------------------------------------//
//-----------------------------------------//
//-----------------------------------------//


// CART CONTROLLER
const cartCtrl = () => {
    // Create cart list IF no list
    if (!state.cart) {
        state.cart = new Cart();
        // Again, could've just written this in one line, but decided to prepare this for future additions (if ever, i decided to add some extra func on this)
    }

    // Add Pokemon to Cart List
    const p = state.pokemon;

    const pokemon = state.cart.addPokemon(p.name, p.weight, p.height, p.img);

    cart_view.displayCartItem(pokemon);

}

// Deleting Pokemon from Cart List
el.cart.addEventListener('click', e => {
    // Closest cart item class where click happens
    const id = e.target.closest('.cart__item').dataset.itemid;

    // Delete button
    if (e.target.matches('.cart__delete, .cart__delete *')) {
        // Delete from UI and CART state
        state.cart.removePokemon(id);
        cart_view.deleteCartItem(id);
    }
});
