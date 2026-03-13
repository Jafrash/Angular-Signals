# SignalsDemo

SignalsDemo is an Angular 21 project built to demonstrate state management with Angular Signals.
It contains two functional areas:

- A names module with add, edit, and remove actions
- A counter module with increment, decrement, and reset actions

The app currently renders the names module in the main screen and keeps all state in-memory.

## Project Output

Add your screenshot file at `public/output-screenshot.png` and it will render below:

![SignalsDemo output](public/output-screenshot.png)

## Features

- Signal-based state in singleton services (`providedIn: 'root'`)
- Standalone Angular components
- Name list management:
	- Add name
	- Edit existing name
	- Remove name
- Counter controls:
	- Increment
	- Decrement
	- Reset
- Tailwind CSS utility styling

## Architecture Overview

### Bootstrapping

- `src/main.ts` bootstraps the app with `bootstrapApplication`
- `src/app/app.config.ts` configures providers and router setup
- `src/app/app.routes.ts` exists but currently has an empty routes array

### Root Composition

- `src/app/app.ts` imports all feature components as standalone imports
- `src/app/app.html` currently renders:
	- `app-show-names`
	- `app-add-name`
- Counter widgets are present in code but commented out in the template

### Services and Signals

- `src/app/features/counter/services/names-service.ts`
	- Stores `names` as `signal<string[]>`
	- Exposes `getNames`, `addName`, `removeName`, `editName`
- `src/app/features/counter/services/counter-service.ts`
	- Stores `count` as `signal<number>`
	- Exposes `increment`, `decrement`, `reset`, `getCount`

## Components

- `show-names` displays the names list using Angular control flow (`@for`)
- `add-name` handles two-way input binding and appends to the list
- `edit-name` toggles edit mode and updates a selected name
- `remove-name` deletes a selected name
- `show-count` renders the counter value
- `increment`, `decrement`, `reset` perform counter actions

## Scripts

Use npm scripts from `package.json`:

```bash
npm start
npm run build
npm run watch
npm test
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm start
```

3. Open:

```text
http://localhost:4200
```

## Testing Status

Unit test files exist for most components and services, but most are basic "should create" checks.
Current improvement opportunities:

- Add behavioral tests for `counter-service` and `names-service`
- Add a missing spec for `edit-name`
- Align `app.spec.ts` expectations with the current `app.html` template

## Notes

- State is in-memory only (refresh resets data)
- Router is configured but routes are not yet used
- Tailwind is active globally via `src/styles.css`
