const locators = require('./locators.json')

Cypress.Commands.add('detailProductPage', (selector = locators.detailProductPage) => {
    cy.get(selector);
});

Cypress.Commands.add('isDetailProductPage', () => {
    cy.detailProductPage().isElementPresent();
});