import { el } from '../base';

// Render Added Pokemon on Vault List
export const displayVaultItem = item => {
    // Markup on the vault with item id on each list item to delete it easily
    const markup = `
        <li class="vault__item" data-itemid="${item.id}">
            <div class="vault__text">
                <h3 class="headline-3">
                    ${item.name}
                </h3>
                <p class="vault__para">
                    ${item.height} inches
                </p>
                <p class="vault__para">
                    ${item.weight} lbs
                </p>
                <button class="btn vault__delete">
                    Remove
                </button>
            </div>
        </li>
    `;
    el.vault.insertAdjacentHTML('beforeend', markup);
};

// Delete Pokemon on Vault
export const deleteVaultItem = id => {
    // Using data-itemid to delete the specific item
    const item = document.querySelector(`[data-itemid="${id}"]`);
    // Check if there is actually an item
    if (item) {
        item.parentElement.removeChild(item);
    }
};