// Contains all of the DOM selectors for other JS files to utilize

export const el = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__input'),
    searchResult: document.querySelector('.results'),
    resultRender: document.querySelector('.results__detail')
};

// For all CSS Classes and IDs
export const elStrings = {
    spinner: 'spinner',
};

// UI Loading Spinner 

export const displaySpinner = parentEl => {

    // TODO: ADD REAL SPINNER HERE

    const spinner = `
        <div class="${elStrings.spinner}">
            <h4> Loading... </h4>
        </div>
    `;
    parentEl.insertAdjacentHTML('afterbegin', spinner);
};

// Clear UI spinner one results return
export const clearSpinner = () => {
    const spinner = document.querySelector(`.${elStrings.spinner}`);

    if (spinner) {
        spinner.parentElement.removeChild(spinner);
    }
};