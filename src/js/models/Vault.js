// List of Pokemon Saved 
class Vault {
    constructor() {
        this.saved = [];
    }

    addSaveItem(id, name, img) {
        // Similar to cart wherein we create an object to store in the array
        const save = {
            id,
            name,
            img
        };
        this.saved.push(save);
        return save;
    }

    // To remove saved item similar to Cart
    deleteSaveItem(id) {
        const i = this.saved.findIndex( el => el.id === id);

        this.items.splice(i, 1);
    }
    // Method to determine saved state of Pokemon item
    isSaved(id) {
        // Find vault item and test whether it is really there or not. Returning true or false
        return this.saved.findIndex(el => el.id === id) !== -1;
    }
    // Get current count of saved items in Vault
    getSavedCount() {
        return this.saved.length;
    }
    
};

export default Vault;