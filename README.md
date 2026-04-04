# tin4

Ant colony management app plan for this monorepo.

## Product Goal

Build an app for managing personal ant colonies.

Core idea:
- A user can create one or more ant colonies.
- Each colony has a diary.
- Photos are attached to diary entries and activities.
- Daily care actions are tracked as structured activities, not just free text.

## Recommended Build Direction

Start with the web app in `apps/nextjs` first.

Reason:
- Faster to ship and iterate than mobile.
- Easier to design the data model, diary flow, and reminder logic.
- Once the flows are stable, reuse the shared packages for a future mobile app in `apps/expo`.

Recommended order:
1. Build the colony list and colony detail pages.
2. Build the diary and activity creation flow.
3. Add image upload/attachment.
4. Add water reminders and water statistics.
5. Add i18n.
6. Only after that, consider push notifications and mobile polish.

## MVP

### 1. Colony Management

Each user can create colonies with:
- Colony name
- Species
- Queen count
- Worker estimate
- Setup date
- Notes
- Cover image

### 2. Colony Diary

Each colony has a diary timeline.

Diary entries can contain:
- Title
- Description
- Date/time
- One or more images
- Optional linked activity

This should be the main history screen for the colony.

### 3. Activities

Use structured activity types instead of plain text.

Initial activity types:
- `feed`
- `water`
- `note`

#### Feed activity

Fields:
- Food type
- Quantity or short note
- Activity timestamp
- Images
- Optional comment

Suggested food types:
- `superworm`
- `dubia`
- `red_runner`

User-facing labels:
- English: Superworm, Dubia, Red Runner
- Vietnamese: Sâu rồng, Dubia, Red Runner

#### Water activity

Fields:
- Water amount or short note
- Activity timestamp
- Images
- Optional comment

Requirements:
- Every watering action is saved as an activity
- Water activities are included in colony statistics
- User can set a reminder interval for watering

### 4. Water Statistics

For each colony, show:
- Last watered at
- Total watering count
- Average interval between watering
- Next reminder time

Good MVP widgets:
- `Last watered`
- `Watered this week`
- `Average interval`

### 5. Water Reminder

Per colony:
- Enable/disable reminder
- Reminder interval in hours or days
- Next reminder timestamp

Later:
- Push notifications
- Quiet hours
- Reminder history

## Suggested Data Model

### User

- `id`
- `email`
- `name`
- `locale`
- `createdAt`

### Colony

- `id`
- `userId`
- `name`
- `species`
- `queenCount`
- `workerEstimate`
- `setupDate`
- `coverImageUrl`
- `notes`
- `createdAt`
- `updatedAt`

### DiaryEntry

- `id`
- `colonyId`
- `title`
- `content`
- `entryAt`
- `activityId` nullable
- `createdAt`

### Activity

- `id`
- `colonyId`
- `type`
- `activityAt`
- `note`
- `metadata` JSON
- `createdAt`

Example `metadata`:

```json
{
  "foodType": "superworm",
  "quantity": "2 pieces"
}
```

or

```json
{
  "waterAmount": "small drop"
}
```

### Media

- `id`
- `colonyId`
- `diaryEntryId` nullable
- `activityId` nullable
- `url`
- `caption`
- `createdAt`

### Reminder

- `id`
- `colonyId`
- `type`
- `enabled`
- `intervalHours`
- `nextReminderAt`
- `lastTriggeredAt` nullable
- `createdAt`
- `updatedAt`

## UX Direction

Main screens:
- Colony list
- Colony detail
- Diary timeline
- New activity modal or sheet
- Water reminder settings

Important UX rules:
- Activity creation must be very fast
- Image upload should feel native and immediate
- Diary should mix text entries and care actions in one timeline
- Water reminder status must be visible from the colony detail page

## i18n

Do not hardcode UI strings in components.

Split wordings into English and Vietnamese files.

Suggested structure:

```text
apps/nextjs/src/i18n/
  en.ts
  vi.ts
  index.ts
```

Suggested shape:

```ts
export const en = {
  common: {
    save: "Save",
    cancel: "Cancel",
  },
  colony: {
    create: "Create colony",
    diary: "Diary",
    activities: "Activities",
  },
  activity: {
    feed: "Feed",
    water: "Water",
    note: "Note",
  },
  food: {
    superworm: "Superworm",
    dubia: "Dubia",
    redRunner: "Red Runner",
  },
};
```

```ts
export const vi = {
  common: {
    save: "Lưu",
    cancel: "Hủy",
  },
  colony: {
    create: "Tạo đàn kiến",
    diary: "Nhật ký",
    activities: "Hoạt động",
  },
  activity: {
    feed: "Cho ăn",
    water: "Cấp nước",
    note: "Ghi chú",
  },
  food: {
    superworm: "Sâu rồng",
    dubia: "Dubia",
    redRunner: "Red Runner",
  },
};
```

Recommendation:
- Keep translation keys stable
- Use camelCase keys
- Separate domain sections like `colony`, `activity`, `food`, `reminder`

## Repo Direction

Use this monorepo like this:

```text
apps/
  nextjs/          Web app first
  expo/            Optional later mobile app
packages/
  api/             API contracts and server logic
  auth/            Authentication logic
  db/              Database schema and queries
  ui/              Shared UI components
  validators/      Shared zod-style validation schemas
```

## First Implementation Slice

Build this first:

1. Colony list page
2. Colony creation form
3. Colony detail page
4. Activity composer with `feed` and `water`
5. Diary timeline with image attachments
6. Water reminder settings

That is enough to prove the product.

## Commands

- `bun install`
- `bun run dev`
- `bun run lint`
- `bun run typecheck`
