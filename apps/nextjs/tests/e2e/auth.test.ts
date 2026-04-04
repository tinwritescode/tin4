import { chromium, type Browser, type Page } from "@playwright/test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("auth playground", () => {
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

  it("follows the google social auth redirect contract in the browser", async () => {
    await page.route("**/api/auth/sign-in/social", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          url: "/mock-google-consent",
          redirect: false,
        }),
      });
    });

    await page.goto("http://127.0.0.1:3000/auth", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);
    await expect(page.getByTestId("sign-in-google").isVisible()).resolves.toBe(true);

    const signInGoogleRequest = page.waitForRequest("**/api/auth/sign-in/social");
    await page.evaluate(async () => {
      const response = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          provider: "google",
          callbackURL: "/",
          disableRedirect: true,
        }),
      });

      const data = (await response.json()) as { url?: string };

      if (data.url) {
        window.location.href = data.url;
      }
    });
    expect((await signInGoogleRequest).postDataJSON()).toMatchObject({
      provider: "google",
      callbackURL: "/",
      disableRedirect: true,
    });
    await page.waitForURL("**/mock-google-consent");
    await expect(
      page.getByRole("heading", { name: "Google auth redirect reached" }).isVisible(),
    ).resolves.toBe(true);
  }, 60_000);
});
