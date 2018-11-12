import axios from 'axios';

import { CORS, URL } from '../config';

// To create instances of the search query
class Search {
    constructor(query) {
        this.query = query;
    }

    // HTTP request method
    async getData() {
        // Convert query to lowercase string
        const searchQuery = this.query.toLowerCase();

        // To handle errors
        try {
            // Fetching data 
            const result = await axios.get(`${CORS}${URL}${searchQuery}`);
                
            // Narrow down to just the data
            this.data = result.data;
        } catch (error) {
            // TODO: Render actual HTML when error occurs
            console.log(error);
        }
    
    }
}

export default Search;
// I could've just done it in one line before class declaration but I want it to be clearer




