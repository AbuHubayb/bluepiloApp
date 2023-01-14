describe('SIGN-IN', () => {
  beforeEach('visit-bluepilo', () => {
    cy.visit('/')
  })

  it('landing - page', () => {
    cy.get('.d-none')
    cy.get(':nth-child(1) > .h4').should('contain', 'Bluepilo Inventory System')
  })
  it('invalid email', () => {
    cy.get(':nth-child(1) > .form-control').type('email@eamil.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
    cy.get('small').should('contain', 'Invalid email')
  })
  it('invalid password', () => {
    cy.get(':nth-child(1) > .form-control').type('almahbuub@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('passwordd')
    cy.get('#submitButton').click()
    cy.get('small').should('contain', 'Invalid Password')
  })
  it('empty email', () => {
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
    cy.url().should('eq', 'https://dev.bluepilo.com/login')
  })
  it('empty password', () => {
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('#submitButton').click()
    cy.url().should('eq', 'https://dev.bluepilo.com/login')
  })
  it('empty credentials', () => {
    cy.get('#submitButton').click()
    cy.url().should('eq', 'https://dev.bluepilo.com/login')
  })
  it('Navigate to PasswordResetPage', () => {
    cy.get('.small').click()
    cy.url().should('eq', 'https://dev.bluepilo.com/forgot-password')
  })
  it('Navigate To RegistartionPage', () => {
    cy.get(':nth-child(4) > a').click()
    cy.url().should('eq', 'https://dev.bluepilo.com/register-business')
  })
})



describe('FORGOT PASSWORD', () => {
  beforeEach('visit-bluepilo-forgot-password', () => {
    cy.visit('/forgot-password')
  })
  it('valid email', () => {
    cy.get('.form-control').type('almahbuub@gmail.com')
    cy.get('.form-control').click()
  })
  it('invalid email', () => {
    cy.get('.form-control').type('miskeenboy@gmail.com{enter}')
  })
  it('back to login', () => {
    cy.get('.small').click()
    cy.url().should('eq', 'https://dev.bluepilo.com/login')
  })
})



describe.only('REGISTRATION', () => {
  beforeEach('visit-reg_page', () => {
    cy.visit('/register-business')
  })

  it('Navigate To RegistartionPage', () => {
  })
})