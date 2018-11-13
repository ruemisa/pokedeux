import { el } from '../base';

// Render Added Pokemon on Cart List
export const displayCartItem = item => {
    // Markup on the cart with item id on each list item to delete it easily
    const markup = `
        <li class="cart__item" data-itemid="${item.id}">
            <figure class="cart__fig">
                <img src="${item.img}" alt="${item.name}" class="cart__img">
            </figure>
            <div class="cart__text">
                <h3 class="headline-3">
                    ${item.name}
                </h3>
                <p class="cart__para">
                    ${item.height} inches
                </p>
                <p class="cart__para">
                    ${item.weight} lbs
                </p>
                <button class="btn cart__delete">
                    Remove
                </button>
            </div>
        </li>
    `;
    el.cart.insertAdjacentHTML('beforeend', markup);
};

// Delete Pokemon on Cart
export const deleteCartItem = id => {
    // Using data-itemid to delete the specific item
    const item = document.querySelector(`[data-itemid="${id}"]`);
    // Check if there is actually an item
    if (item) {
        item.parentElement.removeChild(item);
    }
};