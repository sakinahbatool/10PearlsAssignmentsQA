class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async isFreeShippingAvailable() {
    const deliveryOptions = this.page.locator('div.delivery__option');
    await deliveryOptions.first().waitFor({ state: 'visible', timeout: 30000 });

    const freeShippingOption = deliveryOptions.locator('div:has-text("FREE")');
    return await freeShippingOption.count() > 0;
  }
}

module.exports = ProductPage;