// tests/home.spec.ts
import { test, expect } from "@playwright/test";

test("homepage screenshot", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect(await page.screenshot()).toMatchSnapshot("home.png");
});
