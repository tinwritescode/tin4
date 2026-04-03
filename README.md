# tin4

Minimal Bun-based Turborepo scaffold modeled after the `create-t3-turbo` workspace layout.

## UI Reference

Use [docs/ui-reference.md](/Users/macbook/Coding/tin4/docs/ui-reference.md) as the default visual and interaction reference when creating new UI in this repo.

That document captures the dashboard style, density, component patterns, and implementation rules distilled from the provided reference markup.

## Structure

```text
apps/
  expo/
  nextjs/
  tanstack-start/
packages/
  api/
  auth/
  db/
  ui/
  validators/
tooling/
  eslint/
  github/
  prettier/
  tailwind/
  typescript/
```

## Commands

- `bun install`
- `bun run build`
- `bun run dev`
- `bun run lint`
- `bun run typecheck`
