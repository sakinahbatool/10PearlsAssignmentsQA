class HomePage {
  clickFirstProduct() {
    cy.get('.inventory_item_name').first().click();
  }
}

export default new HomePage();
