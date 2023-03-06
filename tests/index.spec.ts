// Import Playwright's test runner
import { test, expect } from "@playwright/test";

// Define a test suite
test.describe("My Page", () => {
  // Define a test case
  test("should log in the user", async ({ page }) => {
    await page.goto("/");
    // You are signed in!
    //   await page.goto("/");
    await page.waitForURL(
      "https://app-yec57rbn7c0e.frontegg.com/oauth/account/login"
    );
    await page.fill('[name="email"]', "strengthcoachwb@gmail.com");
    await page.fill('[name="password"]', "Password1!");
    await page.click('[type="submit"]');

    // Wait for the user name to be visible
    await page.waitForSelector("text=Logged in as:");
  });
});
