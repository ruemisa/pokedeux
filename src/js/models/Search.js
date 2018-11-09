// For Axios to work
import axios from 'axios';

// To create instances of the search query
class Search {
    constructor(query) {
        this.query = query;
    }

    // HTTP request method
    async getResults() {
        // Convert query to lowercase string
        const searchQuery = this.query.toLowerCase();

        // To handle the CORS issue
        const CORS = 'https://cors-anywhere.herokuapp.com/';
        // Poke API url
        const URL = 'https://pokeapi.co/api/v2/pokemon/';

        // To handle errors
        try {
            // Fetching data 
            const result = await axios.get(`${CORS}${URL}${searchQuery}`);
                
            // Narrow down to just the data
            this.data = result.data;
            console.log(this.data);
        } catch (error) {
            console.log(error);
        }
    
    }
}

export default Search;
// I could've just done it in one line before class declaration but I want it to be clearer




