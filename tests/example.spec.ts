import { test } from "@playwright/test";

test("redirct to newegg and login", async ({ page }) => {
  await page.goto("/");

  // Wait for the redirect to frontegg login to complete
  await page.waitForURL(
    "https://app-yec57rbn7c0e.frontegg.com/oauth/account/login"
  );

  await page.goto("https://app-yec57rbn7c0e.frontegg.com/oauth/account/login");

  // Fill in email and password
  await page.fill('[name="email"]', "strengthcoachwb@gmail.com");
  await page.fill('[name="password"]', "Password1!");

  // Click on the submit button
  await page.click('[type="submit"]');
});
