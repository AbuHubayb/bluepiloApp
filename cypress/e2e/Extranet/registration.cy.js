describe('sign-in', () => {
  beforeEach('visit-bluepilo', ()=>{
    cy.visit('/')
  })
  it('landing - page', () => {
    cy.get('.d-none')
    cy.get(':nth-child(1) > .h4').should('contain','Bluepilo Inventory System')
  })
  it.only('invalid credentials', () => {
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
    cy.get('small').should('contain', 'Invalid email')
  })
  it('invalid email', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
  })
  it('invalid password', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
  })
  it('empty email', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
  })
  it('empty password', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
  })
  it('empty credentials', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
  })
  it('credential mismatch', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
  })
  it('valid credentials', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
  })

  it('passes', () => {
    cy.visit('/')
    cy.get(':nth-child(4) > a').click()
  })
  
})