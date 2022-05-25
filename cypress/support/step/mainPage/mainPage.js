const locators = require('./locators.json')

Cypress.Commands.add('mainPage', (selector = locators.mainPage) => {
    cy.get(selector);
});

Cypress.Commands.add('searchInput', (selector = locators.searchInput) => {
    cy.get(selector);
});

Cypress.Commands.add('searchButton', (selector = locators.searchButton) => {
    cy.get(selector);
});

Cypress.Commands.add('isMainPageOpen', () => {
    cy.mainPage().isElementPresent();
});

Cypress.Commands.add('typeSearchRequest', (text) => {
    cy.searchInput().clearAndType(text);
});

Cypress.Commands.add('searchInputContainsText', (text) => {
    cy.searchInput().inputWithText(text);
});

Cypress.Commands.add('clickSearchButton', () => {
    cy.searchButton().clickElement();
});