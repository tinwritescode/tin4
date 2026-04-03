# UI Reference

This document is the canonical UI direction for future screens in this repo.

It is based on the provided reference markup and should be treated as the default visual system unless a task explicitly says otherwise.

## Core Direction

- Build dense, dashboard-style layouts instead of sparse marketing pages.
- Prefer multi-column compositions with many purposeful cards visible at once.
- Use muted surfaces, light borders, compact spacing, and strong information hierarchy.
- Favor product UIs that feel operational, analytical, and tool-like.
- Use tabular numerals for financial values, metrics, balances, percentages, and dates.
- Keep copy concise, specific, and product-oriented.

## Layout Rules

- Default to a dashboard grid with mixed card sizes instead of a single linear page.
- Mix analytics, forms, tables, empty states, controls, and utility panels in the same view.
- Use asymmetric compositions when useful; avoid overly centered or overly simplified layouts.
- Keep cards compact and stack related controls inside them.
- Use header, content, and footer sections consistently inside cards.
- Prefer visible density over excessive whitespace.

## Visual Language

- Lean on the shared shadcn-style component language already present in the repo.
- Use muted backgrounds, subtle separators, and quiet borders.
- Keep accents restrained and driven by data or state.
- Titles should feel strong and compact; descriptions should be muted and secondary.
- Use uppercase micro-labels for small metadata when it improves scanability.
- Use badges, progress bars, toggles, and status dots to communicate state quickly.

## Preferred Component Patterns

The reference favors these patterns:

- Metric cards with title, description, badge, and inline action.
- Data visualizations inside cards: bar, area, pie, and compact sparkline-style charts.
- Rich empty states with icon, title, explanation, and one direct CTA.
- Operational forms with selects, sliders, textareas, switches, checkboxes, and grouped fields.
- Transaction tables and item lists with compact metadata and right-aligned values.
- Calendar, scheduling, and payout/payment planning surfaces.
- Smart-home style control cards with toggles, sliders, and mode chips.
- Progress and milestone cards with financial targets and completion states.
- Mixed footers containing helper text, summaries, or next actions.

## Content Patterns

- Prefer concrete domain language over generic placeholder copy.
- Good domains for this style:
  - Finance
  - creator payouts
  - investing
  - transactions
  - subscriptions
  - smart home controls
  - operations dashboards
- Use realistic labels such as balances, royalties, thresholds, milestones, dividends, payments, notifications, and device settings.
- Keep CTA labels direct: `Save`, `Review Order`, `Set Up Payouts`, `View Report`, `Create Goal`.

## Interaction Rules

- Place secondary actions in card headers as ghost or icon buttons.
- Place primary actions in card footers or at the bottom of forms.
- Use segmented controls and toggle groups for short mode changes.
- Use sliders for continuous numeric adjustments.
- Use switches and checkboxes for settings and notification preferences.
- Use compact lists and tables before building large detail pages.

## Implementation Guidance

- Prefer composing screens from shared components in `@tin4/ui`.
- Reuse card, button, input, table, badge, progress, and field primitives before inventing new patterns.
- Keep styling token-driven and consistent with the repo's existing Tailwind and shadcn setup.
- When adding charts, favor simple readable shapes with muted axes and restrained color.
- When creating a new page from scratch, start with a card grid and fill it with mixed utility panels.
- Avoid hero-first landing page layouts unless the task is explicitly marketing-focused.
- Avoid oversized empty space, giant headlines, or generic startup visuals.

## Practical Default

If a future prompt says "make a UI" without more direction, use this baseline:

1. Start with a responsive dashboard grid.
2. Add 4 to 10 cards with mixed purposes.
3. Include at least one data display, one control surface, and one list or table.
4. Use compact copy, muted descriptions, and strong numeric hierarchy.
5. Finish with realistic actions and states, including at least one empty, pending, or success state where relevant.

## Reference Summary

The source reference combines:

- financial dashboards
- royalty and payout workflows
- transaction history
- settings and preferences panels
- chart-heavy reporting
- smart-home control surfaces
- calendar and schedule interfaces
- dense card-based information architecture

That combination should guide both the structure and the tone of future UI work in this repo.
