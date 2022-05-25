Cypress.Commands.add('clickElement', { prevSubject: 'optional' }, (selector) => {
    cy.infoLog(`Click element with selector ${selector}`)
    cy.get(selector).click()
});

Cypress.Commands.add('clearAndType', { prevSubject: 'optional' }, (selector, text) => {
    cy.infoLog(`Clear input with selector${selector} and type text ${text}`);
    cy.get(selector).clear().type(text);
});

Cypress.Commands.add('sendKey', { prevSubject: 'optional' }, (selector, key) => {
    cy.infoLog(`Send key ${key}`);
    cy.get(selector).type(`{${key}}`);
});

Cypress.Commands.add('scrollIntoElementView', { prevSubject: 'optional' }, (selector) => {
    cy.infoLog(`Scroll to view element ${selector}`);
    cy.get(selector).scrollIntoView() ;
});

Cypress.Commands.add('checkCheckbox', { prevSubject: true }, (selector) => {
    cy.infoLog(`Check checkbox with selector ${selector}`);
    cy.get(selector).check({force: true});
});