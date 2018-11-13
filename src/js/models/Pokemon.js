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

            const result = await axios(`${CORS}${URL}${this.id}`);

            const data = result.data;

            // Get all details needed for view
            this.name = data.name;
            this.hp = data.stats[5].base_stat;
            this.def = data.stats[3].base_stat;
            this.att = data.stats[4].base_stat;
            this.abilities = [];
            data.abilities.forEach( abil => {
                this.abilities.push(abil.ability.name);
            });
            this.types = [];
            data.types.forEach( t => {
                this.types.push(t.type.name);
            });
            
            this.img = data.sprites.front_default;

            this.height = data.height;
            this.weight = data.weight;
            
        } catch (error) {
            // TODO: Render HTML when error occurs.
            console.log(error);
        };
    }
}

export default Pokemon;