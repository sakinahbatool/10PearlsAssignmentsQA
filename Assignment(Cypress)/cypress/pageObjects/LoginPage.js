class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com')
  }

  fillUsername(username) {
    cy.get('#user-name').type(username)
  }

  fillPassword(password) {
    cy.get('#password').type(password)
  }

  clickLogin() {
    cy.get('#login-button').click()
  }
}

export default new LoginPage();
