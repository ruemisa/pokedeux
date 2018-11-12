// Imported query selectors file (base)
import { el, displaySpinner, clearSpinner } from './base';

// Models
import Search from './models/Search';
import Pokemon from './models/Pokemon';

// Views
import * as search_view from './views/search_view';

// APPLICATION STATE 
const state = {};

// SEARCH CONTROLLER 

// Callback for Search
const searchCtrl = async () => {
    // Get query from view
    const query = search_view.inputHandler(); 
    // Test
    console.log(query);

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

el.searchForm.addEventListener('submit', e => {
    // We don't want no reloads man
    e.preventDefault();
    searchCtrl();
});

// CURRENT POKEMON CONTROLLER
// TODO: If searched pokemon, display data automatically even without click
const pokemonCtrl = async () => {
    // Store pokemon ID minus hash upon click
    const id = window.location.hash.replace('#', '');
    console.log(id);
    // Only do it if there is id
    if (id) {
        // Prepare UI for data

        // Create new Pokemon Object
        state.pokemon = new Pokemon(id);

        // To handle errors gracefully in case something goes wrong
        try {
            // Get the data
            await state.pokemon.getPokemon();
            // Render to UI
            console.log(state.pokemon);

        } catch (error) {
            // TODO: Add HTML for error
            console.log(error);
        };
        
    };
};

// UI events for Current Pokemon Controller
const pokemonCtrlEvents = ['hashchange', 'load'];

pokemonCtrlEvents.forEach(e => {
    window.addEventListener(e, pokemonCtrl);
});


// SAVED POKEMON CONTROLLER

