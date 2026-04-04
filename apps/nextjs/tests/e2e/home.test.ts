import { chromium, type Browser, type Page } from "@playwright/test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("landing page", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page?.close();
    await browser?.close();
  });

  it("renders the hero and primary contact actions", async () => {
    await page.goto("http://127.0.0.1:3000");

    await expect(page.getByRole("heading", { name: /No scroll,/i }).isVisible()).resolves.toBe(
      true,
    );
    await expect(
      page.getByLabel("Top navigation").getByRole("link", { name: "Contact" }).isVisible(),
    ).resolves.toBe(true);
    await expect(page.locator("header").getByRole("link", { name: "Contact" }).last().isVisible()).resolves.toBe(
      true,
    );
    await expect(page.getByRole("link", { name: "Start now" }).isVisible()).resolves.toBe(true);
    await expect(page.getByText("hello@tin4.dev").isVisible()).resolves.toBe(true);
  });
});
