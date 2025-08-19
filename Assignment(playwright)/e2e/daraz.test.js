const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');

// Test 1: Filter products and count them
test('Daraz: Filter products and count', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();
  await home.searchItem('electronics');
  await home.selectAnyBrand();
  await home.applyPriceFilter(500, 5000);

  const count = await home.getProductCount();
  expect(count).toBeGreaterThan(0);
});

// Test 2: Check free shipping for first product
test('Daraz: Check free shipping on first product', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);

  await home.navigate();
  await home.searchItem('electronics');
  await home.selectAnyBrand();
  await home.applyPriceFilter(500, 5000);

  await home.selectFirstProduct();

  const freeShipping = await product.isFreeShippingAvailable();
  expect(freeShipping).toBe(true);
});
