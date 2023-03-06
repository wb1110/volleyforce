// Import Playwright's test runner
import { test, expect } from "@playwright/test";

// Define a test suite
test.describe("My Page", () => {
  // Define a test case
  test("should log out the user", async ({ page }) => {
    // Wait for the user name to be visible
    await page.waitForSelector("text=Logged in as:");

    // Click on the log out button
    await page.click('button:text("Log out")');

    // Expect to be redirected to the logout page
    await expect(page).toHaveURL("http://localhost:3000/account/logout");
  });
});
