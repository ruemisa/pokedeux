import axios from 'axios';

import { CORS, URL } from '../config';

class Pokemon {
    constructor(id) {
        this.id = id;
    }

    // To get pokemon data from search and save it into its own class rather than the Search class
    async getPokemon() {
        // Similar to the Search model method
        try {
            const result = await axios(`${CORS}${URL}${this.id}`)
            // Get all details needed for view
            this.name = result.data.name;
            // TODO: Store this in an object
            this.hp = result.data.stats[5].base_stat;
            this.def = result.data.stats[3].base_stat;
            this.att = result.data.stats[4].base_stat;
            this.abilities = [];
            result.data.abilities.forEach( abil => {
                this.abilities.push(abil.ability.name);
            });
            this.types = [];
            result.data.types.forEach( t => {
                this.types.push(t.type.name);
            })

            console.log(result.data);
            
        } catch (error) {
            // TODO: Render HTML when error occurs.
            console.log(error);
        }
    }
}

export default Pokemon;