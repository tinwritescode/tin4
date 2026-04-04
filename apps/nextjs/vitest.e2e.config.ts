import { defineConfig } from "vitest/config";

export default defineConfig({
  root: ".",
  test: {
    dir: ".",
    include: ["tests/e2e/**/*.test.ts"],
    globals: true,
    testTimeout: 30_000,
    hookTimeout: 30_000,
    globalSetup: ["./tests/e2e/global-setup.ts"],
  },
});
