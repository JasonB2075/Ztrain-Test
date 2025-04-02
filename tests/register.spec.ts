import { test, expect } from '@playwright/test';

test('Create account successfully', async ({ page,browser }) => {
    // Créer un contexte avec un User-Agent spécifique
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1 Chrome/90.0.4430.212'
  });

  const response = await page.goto('https://ztrain-web.vercel.app/home', {
    waitUntil: 'domcontentloaded',
    timeout: 300000
  });


  //Génerer un email 
  const date = new Date();
  const email = "test " + date + "@gmail.com";

  await page.waitForSelector('#style_avatar_wrapper__pEGIQ', { timeout: 60000 });
  await page.locator("#style_avatar_wrapper__pEGIQ").click();
  await page.locator(".MuiTabs-root button:nth-child(2)").click();
  
  //Remplir les champs du formulaire
  await page.locator("#email_register").fill(email);
  await page.locator("#password_register").fill("123456789");
  await page.locator("#confirm_password_register").fill("123456789");
  await page.locator("#btn_register").click();
  await context.close();
});