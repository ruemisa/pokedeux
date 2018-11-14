import { el } from '../base';

// Toggle Save Button Handler
export const toggleSave = isSaved => {
    // TODO: IMPROVE changes to UI Button
    let textChange = isSaved ? 'Remove from Vault' : 'Add to Vault';
    // Set it as text of button
    document.querySelector('.pokemon__save').innerHTML = textChange;
};

// Toggle Vault Menu Handler
export const toggleVaultBtn = count => {
    // To make menu visible or not depending on the number of vault items present
    el.vaultToggler.style.visibility = count > 0 ? 'visible' : 'hidden';
};

// Render Saved Items to UI
export const displaySaved = saved => {
    const markup = `
        <li class="vault__item">
            <a class="vault__link" href="#${saved.id}">
                <figure class="vault__fig">
                    <img src="${saved.img}" alt="${saved.name}">
                    <div class="vault__text">
                        <h4 class="vault__name">
                            ${saved.name}
                        </4>
                    </div>
                </figure>
            </a>
        </li>
    `;
    el.vaultList.insertAdjacentHTML('beforeend', markup);
};

// Removing it from UI
export const removeSaved = id => {
    // All .vault__link(s) with href of id
    const el = document.querySelector(`.vault__link[href="#${id}"]`).parentElement;
    // Move up to parent to delete saved item
    if (el) {
        el.parentElement.removeChild(el);
    }
}