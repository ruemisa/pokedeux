import { el } from '../base';

// Toggle Save Button Handler
export const toggleSave = isSaved => {
    // TODO: IMPROVE changes to UI Button
    let textChange = isSaved ? 'Remove from Vault' : 'Add to Vault';
    // Set it as text of button
    document.querySelector('.pokemon__save').innerHTML = textChange;
};

// Toggle Vault Menu Handler
export const toggleVault = count => {
    // To make menu visible or not depending on the number of vault items present
    el.vaultToggler.style.visibility = count > 0 ? 'visible' : 'hidden';
};