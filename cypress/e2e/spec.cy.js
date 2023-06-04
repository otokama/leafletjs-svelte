describe('spec.cy.js', () => {
  it('should visit'), () => {
    cy.visit('/');
  }
});

describe('My First Test Run', () => {
  it('Failed my first Cypress test!', () => {
    expect(true).to.equal(false)
  })
});

describe('My Second Test Run', () => {
  it('Passed my second Cypress test!', () => {
    expect(true).to.equal(true)
  })
});