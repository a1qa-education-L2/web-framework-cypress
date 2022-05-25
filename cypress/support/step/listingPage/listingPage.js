const locators = require('./locators.json');
const StringUtils = require('../../utils/srtingUtils');

Cypress.Commands.add('productCard', (selector = locators.productCard) => {
    cy.get(selector);
});

Cypress.Commands.add('productPrice', (selector = locators.productPrice) => {
    cy.get(selector);
});

Cypress.Commands.add('filterCheckbox', (name, selector = locators.filterCheckbox) => {
    const formatedSelector = StringUtils.format(selector, name);
    cy.get(formatedSelector);
});

Cypress.Commands.add('sorting', (selector = locators.sorting) => {
    cy.get(selector);
});

Cypress.Commands.add('isProductCardPresent', () => {
    cy.productCard().isElementPresent();
});

Cypress.Commands.add('clickOnSorting', () => {
    cy.sorting().clickElement();
});

Cypress.Commands.add('chooseSorting', (sortingType) => {
    cy.contains(sortingType).clickElement();
});

Cypress.Commands.add('isProductsSortedAscending', (count) => {
    cy.productPrice().isPriceSortedAscending(count);
});

Cypress.Commands.add('clickProductCard', () => {
    cy.productCard().first().clickElement();
});
