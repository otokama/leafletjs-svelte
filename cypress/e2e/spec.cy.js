describe('spec.cy.js', () => {
  it('should visit'), () => {
    cy.visit('/');
  }
});

describe('My First Test', () => {
  it('Passed my first Cypress test!', () => {
    expect(true).to.equal(false)
  })
});