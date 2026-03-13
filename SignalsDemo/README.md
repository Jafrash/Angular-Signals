# SignalsDemo

SignalsDemo is an Angular 21 project built to demonstrate state management with Angular Signals.
It contains two functional areas:

- A names module with add, edit, and remove actions
- A counter module with increment, decrement, and reset actions

The app currently renders the names module in the main screen and keeps all state in-memory.

## Project Output

Add your screenshot file at `public/output-screenshot.png` and it will render below:

<img width="1919" height="774" alt="image" src="https://github.com/user-attachments/assets/4db3a23e-1e47-499d-979d-4fb049d9e4a5" />


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




