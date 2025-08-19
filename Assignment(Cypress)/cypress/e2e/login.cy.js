// describe('SauceDemo Login Tests', () => {
//   it('Displays error on wrong login', () => {
//     cy.visit('https://www.saucedemo.com')

   
//     cy.get('#user-name').type('wrong_user')
//     cy.get('#password').type('wrong_pass')
//     cy.get('#login-button').click()

//     cy.get('[data-test="error"]').should('contain.text', 'Epic sadface')
//   })

//   it('Logs in with valid credentials and lands on home page', () => {
//   cy.visit('https://www.saucedemo.com')

//   cy.get('#user-name').type('standard_user')
//   cy.get('#password').type('secret_sauce')
//   cy.get('#login-button').click()

//   cy.url().should('include', '/inventory.html')
// })

// it('Clicks on a product and lands on its product page', () => {
//   cy.visit('https://www.saucedemo.com')

//   cy.get('#user-name').type('standard_user')
//   cy.get('#password').type('secret_sauce')
//   cy.get('#login-button').click()

// cy.get('.inventory_item_name').first().click()

//   cy.url().should('include', '/inventory-item.html')
//   cy.get('.inventory_details_name').should('be.visible')
// })

// })



import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage'

describe('SauceDemo Tests', () => {
  it('Displays error on wrong login', () => {
    LoginPage.visit()
    LoginPage.fillUsername('wrong_user')
    LoginPage.fillPassword('wrong_pass')
    LoginPage.clickLogin()
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface')
  })

  it('Logs in with valid credentials and lands on home page', () => {
    LoginPage.visit()
    LoginPage.fillUsername('standard_user')
    LoginPage.fillPassword('secret_sauce')
    LoginPage.clickLogin()
    cy.url().should('include', '/inventory.html')
  })

  it('Clicks on a product and lands on its product page', () => {
    cy.login('standard_user','secret_sauce')


    HomePage.clickFirstProduct()
    cy.url().should('include', '/inventory-item.html')
    cy.get('.inventory_details_name').should('be.visible')
  })
})
