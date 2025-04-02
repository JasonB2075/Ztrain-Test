import { test, expect } from '@playwright/test';

test('Ajouter un produit au panier', async ({ page }) => {
    await page.goto('https://ztrain-web.vercel.app/home', {waitUntil: 'domcontentloaded' });
    await page.locator('.style_card_body__QuFGN').first().click();
    const addButton = page.locator('button:has-text("Ajouter au panier")');
    await addButton.click();
    const notification = page.locator('.ant-notification-notice-message');
    await expect(notification).toHaveText('Ajout produit au panier');
    const cartCount = page.locator('#style_content_cart_wrapper__mqNbf');
    await expect(cartCount).toHaveText('1');
});