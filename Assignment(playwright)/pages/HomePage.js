class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#q');
    this.searchButton = page.locator('.search-box__button--1oH7');
    this.minPriceInput = page.locator('input[placeholder="Min"]');
    this.maxPriceInput = page.locator('input[placeholder="Max"]');
  }

  async navigate() {
    await this.page.goto('https://www.daraz.pk/');
  }

  async searchItem(item) {
    await this.searchInput.fill(item);
    await this.searchButton.click();
  }

  async selectAnyBrand() {
    const brandCheckbox = this.page.locator('label:has(input[type="checkbox"])').first();
    await brandCheckbox.scrollIntoViewIfNeeded();
    await brandCheckbox.waitFor({ state: 'visible', timeout: 60000 });
    if (!(await brandCheckbox.locator('input[type="checkbox"]').isChecked())) {
      await brandCheckbox.locator('input[type="checkbox"]').check({ force: true });
    }
  }

  async applyPriceFilter(min, max) {
    await this.minPriceInput.fill(min.toString());
    await this.maxPriceInput.fill(max.toString());
    await this.maxPriceInput.press('Enter'); 
  }

  async getProductCount() {
    const products = this.page.locator('div[data-qa-locator="product-item"]');
    await products.first().waitFor({ state: 'visible', timeout: 60000 });
    return await products.count();
  }

  async selectFirstProduct() {
    await this.page.locator('div[data-qa-locator="product-item"] a').first().click();
  }
}

module.exports = HomePage;
