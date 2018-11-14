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
        // Also saved to localStorage for vault data to persist
        this.persistSaved();


        return save;
    }

    // To remove saved item similar to Cart
    deleteSaveItem(id) {
        const i = this.saved.findIndex( el => el.id === id);

        this.saved.splice(i, 1);
        // Also saved to localStorage for vault data to persist
        this.persistSaved();

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
    // Method to save data to localStorage
    persistSaved() {
        localStorage.setItem('saved', JSON.stringify(this.saved));
    }
    // Method to get data from localStorage
    getDataFromStorage() {
        const storage = JSON.parse(localStorage.getItem('saved'));
        // Test whether there is a storage or not otherwise it will return null
        if (storage) {
            // If there is data, then we just reset vault items with the ones from storage. 
            this.saved = storage;
        }
    }

};

export default Vault;