const StringUtils = require('../utils/srtingUtils');
const ArrayUtils = require('../utils/arrayUtils')

Cypress.Commands.add('isElementPresent', { prevSubject: true }, (subject) => {
    cy.infoLog(`Check is element present`);
    cy.wrap(subject, { log: false }).should('be.visible');
});

Cypress.Commands.add('inputWithText', { prevSubject: true }, (subject, text) => {
    cy.infoLog(`Check is input contains text:  ${text}`);
    cy.wrap(subject, { log: false }).should('have.value', text);
});

Cypress.Commands.add('urlIncludeText', { prevSubject: false}, (text) => {
    cy.infoLog(`Check is url contains text:  ${text}`);
    cy.url().should('include', text) 
});

Cypress.Commands.add('isChecked', { prevSubject: true}, (subject) => {
    cy.infoLog(`Check is checkbox checked`);
    cy.wrap(subject, { log: false }).should('be.checked')
});

Cypress.Commands.add('isPriceSortedAscending', { prevSubject: 'optional'}, (subject,productCount) => {
    cy.infoLog(`Check is price sorting ascending`);
    cy.wrap(subject, { log: false }).then((element) => {
    let pricesArray = [...element].map(elem => elem.textContent).slice(0, productCount);
    let prices = pricesArray.map(elem => StringUtils.getNumbersFromString(elem));
    expect(ArrayUtils.isNumberArraySortedAscending(prices)).to.be.true;   
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})