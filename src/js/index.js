import Search from './models/Search';

// APPLICATION STATE 
const state = {};

// Callback for Search
const searchCtrl = async () => {
    // Get query from view
    // TODO: make dynamic later
    const query = '133'; 

    if (query) {
        // Add search object to state
        state.search = new Search(query);

        // Prepare UI for results (add loading spinner here)

        // Get results of search query
        await state.search.getData();

        // Render needed data on UI 
        console.log(state.search.data);
    }
}

// SEARCH CONTROLLER 
document.querySelector('.search').addEventListener('submit', e => {
    // We don't want no reloads man
    e.preventDefault();
    searchCtrl();
});

// CURENT POKEMON CONTROLLER


// SAVED POKEMON CONTROLLER

