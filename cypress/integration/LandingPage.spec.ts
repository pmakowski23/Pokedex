export {};

describe('Example Functional Tests', () => {
  before(() => {
    cy.visit('/');
  });

  it('should navigate to the homepage of qa demo', () => {
    const navigation = 'header > div > div > div';
    cy.get(`${navigation} > a > button`).should('contain', 'Home');
    cy.get(`${navigation} > a > button`).should('contain', 'Fight');
    cy.get(`${navigation} > a > button`).should('contain', 'Customize');
    cy.url().should('be.equal', 'http://localhost:3000/');
  });
});
