// To provide each item a unique id, instead of just the regular ids of pokemon
import uniqid from 'uniqid';

// List of Pokemon Added
class Vault {
    constructor() {
        // This is where pokemon will be stored
        this.items = [];
    }

    addPokemon(name, weight, species) {
        // Store details in an item to be pushed inside the items array
        const pokemon = {
            id: uniqid(),
            name,
            weight, 
            species
        };
        this.items.push(pokemon);
        return pokemon;
    }

    removePokemon(id) {
        // Find the index that is equal to the passed arg id. Stored in i. 
        const i = this.items.findIndex( el => el.id === id);
        // To mutate the array instead of slice
        this.items.splice(i, 1);
    }

};


export default Vault;