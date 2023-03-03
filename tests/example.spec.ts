import { test, expect } from "@playwright/test";

test("redirct to newegg and login", async ({ page }) => {
  await page.goto("/");

  // Wait for the redirect to frontegg login to complete
  await page.waitForURL(
    "https://app-yec57rbn7c0e.frontegg.com/oauth/account/login"
  );

  await page.goto("https://app-yec57rbn7c0e.frontegg.com/oauth/account/login");

  // await page.getByLabel("Email").fill("strengthcoachwb@gmail.com");
  // await page.getByLabel("Password").fill("Password1!");
  // await page.getByText("Login").click();
});
