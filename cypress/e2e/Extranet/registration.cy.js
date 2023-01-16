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



describe.only('FORGOT PASSWORD', () => {
  beforeEach('visit-bluepilo-forgot-password', () => {
    cy.visit('/forgot-password')

  })
  it('valid email', () => {
    cy.get('.form-control')
      .type('almahbuub@gmail.com')
    cy.get('.form-control')
      .click()
  })
  it.only('invalid email', () => {
    cy.get('.form-control')
      .type('miskeenboy@gmail.com{enter}')
    cy.intercept(
      {
        method: 'POST', // Route all GET requests
        url: '/*', // that have a URL that matches '/users/*'
      },
      {"success":false,"status":"error","message":"Email not found","data":[]} // and force the response to be: []
    ).as('getUsers')
    cy.wait('@getUsers')

    // how do i return the response back to the application
    cy.get('.alert > small').should('contain', 'not found')
  })
  it('back to login', () => {
    cy.get('.small')
      .click()
    cy.url()
      .should('eq', 'https://dev.bluepilo.com/login')
  })
})



describe('REGISTRATION', { ensureScrollable: true }, () => {
  beforeEach('visit-reg_page', () => {
    cy.visit('/register-business')
  })

  xit('Sucessful Registration', () => {
    cy.get(':nth-child(1) > .form-control').type('Money Business')
    cy.get(':nth-child(2) > .form-control').type('almahbuub@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('51585 Audreanne Summit')
    cy.get('.select__indicator').click().type('{downArrow}{downArrow}{enter}')
    cy.get(':nth-child(5) > .form-control').type('07062358745')
    cy.get(':nth-child(6) > .form-control').type('23658964')
    cy.get(':nth-child(8) > .form-control').type('Kyle')
    cy.get(':nth-child(9) > .form-control').type('Corona')
    cy.get(':nth-child(10) > .form-control').type('P@ssw0rd')
    cy.get(':nth-child(11) > .form-control').type('P@ssw0rd')
    cy.get('.btn').click()
    // Assertion
  })
  xit('Multiple Registration', () => {
    cy.get(':nth-child(1) > .form-control').type('Money Business')
    cy.get(':nth-child(2) > .form-control').type('almahbuub@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('51585 Audreanne Summit')
    cy.get('.select__indicator').click().type('{downArrow}{downArrow}{enter}')
    cy.get(':nth-child(5) > .form-control').type('07062358745')
    cy.get(':nth-child(6) > .form-control').type('23658964')
    cy.get(':nth-child(8) > .form-control').type('Kyle')
    cy.get(':nth-child(9) > .form-control').type('Corona')
    cy.get(':nth-child(10) > .form-control').type('P@ssw0rd')
    cy.get(':nth-child(11) > .form-control').type('P@ssw0rd')
    cy.get('.btn').click()
    // Assertion
  })
  it('Password Mismatch', () => {
    cy.get(':nth-child(1) > .form-control').type('Money Business')
    cy.get(':nth-child(2) > .form-control').type('almahbuub@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('51585 Audreanne Summit')
    cy.get('.select__indicator').click().type('{downArrow}{downArrow}{enter}')
    cy.get(':nth-child(5) > .form-control').type('07062358745')
    cy.get(':nth-child(6) > .form-control').type('23658964')
    cy.get(':nth-child(8) > .form-control').type('Kyle')
    cy.get(':nth-child(9) > .form-control').type('Corona')
    cy.get(':nth-child(10) > .form-control').type('P@ssw0rd')
    cy.get(':nth-child(11) > .form-control').type('Pssw0rd')
    cy.get('.btn').click()
    // Assertion
    cy.get('.alert > small').should('contain', 'does not match')
  })
  it('Navigate to Login', () => {
    cy.get('.p-5 > div.text-center').click()
    // Assertion
    cy.url().should('eq', 'https://dev.bluepilo.com/login')
  })
  it('Optional Fields', () => {
    cy.get(':nth-child(1) > .form-control').type('Money Business')
    cy.get(':nth-child(2) > .form-control').type('almahbuub@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('51585 Audreanne Summit')
    cy.get('.select__indicator').click().type('{downArrow}{downArrow}{enter}')
    cy.get(':nth-child(5) > .form-control').type('07062358745')
    cy.get(':nth-child(8) > .form-control').type('Kyle')
    cy.get(':nth-child(9) > .form-control').type('Corona')
    cy.get(':nth-child(10) > .form-control').type('P@ssw0rd')
    cy.get(':nth-child(11) > .form-control').type('P@ssw0rd')
    cy.get('.btn').click()
    // Assertion
  })
})