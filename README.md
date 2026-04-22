# PlayPatch

PlayPatch is a premium kids learning app concept focused on pattern fluency, progression, and visible world-building rewards. This repository contains a working React + TypeScript MVP with a parent-facing landing page, a child dashboard, the `Garden Trails` flagship game, and a simple local progress model.

## Stack

- React
- TypeScript
- Vite
- React Router

## Getting Started

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Architecture

The codebase is organized around product surfaces instead of a single flat `src` directory.

- `src/app`
  Routing and top-level providers.
- `src/components`
  Reusable UI grouped by product area such as landing, game, world, layout, and feedback.
- `src/data`
  MVP mock levels and seed progress state.
- `src/features`
  Typed gameplay and progress logic.
- `src/pages`
  Route-level screens: landing, dashboard, game, and parent progress.
- `src/styles`
  Shared visual system and page styling.

## Routes

- `/`
  Parent-facing landing page
- `/dashboard`
  Child dashboard with current habitat, rewards, and available activity
- `/game`
  `Garden Trails` pattern game
- `/progress`
  Parent progress summary

## MVP Product Scope

- One premium landing page for parents
- One polished child dashboard
- One flagship game built around visual pattern completion
- One visible reward loop based on seeds, blooms, and unlocks
- One frontend-only progress model with no backend dependency

## Product Intent

Every solved pattern should help the child grow a world they care about, while every session should produce progress parents can understand at a glance.
