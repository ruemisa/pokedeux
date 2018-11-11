// Imported query selectors file (base)
import { el, displaySpinner, clearSpinner } from './base';

// Models
import Search from './models/Search';

// Views
import * as search_view from './views/search_view';

// APPLICATION STATE 
const state = {};

// Callback for Search
const searchCtrl = async () => {
    // Get query from view
    const query = search_view.inputHandler(); 
    // Test
    // console.log(query);

    if (query) {
        // Add search object to state
        state.search = new Search(query);

        // Clear user Input and Previous Result before loading spinner
        search_view.clearInput();
        search_view.clearResult();
        // Prepare UI for results (add loading spinner here)
        displaySpinner(el.searchResult);
        

        // Get results of search query
        await state.search.getData();

        // Render needed data on UI 
        clearSpinner();
        // TODO: remove console log 
        console.log(state.search.data);
        search_view.displayResult(state.search.data);
    }
}

// SEARCH CONTROLLER 
el.searchForm.addEventListener('submit', e => {
    // We don't want no reloads man
    e.preventDefault();
    searchCtrl();
});

// CURENT POKEMON CONTROLLER


// SAVED POKEMON CONTROLLER

