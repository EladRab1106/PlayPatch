# PlayPatch

PlayPatch is a premium kids learning app concept focused on pattern fluency, progression, and visible world-building rewards. This repository contains the React + TypeScript MVP foundation for the product.

## Stack

- React
- TypeScript
- Vite

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

The codebase is organized around product surfaces instead of a single flat `src` directory:

- `src/components`
  Shared UI building blocks and layout primitives.
- `src/pages`
  Route-level screens and high-level experiences.
- `src/styles`
  Global design tokens and foundational styling.

As the MVP expands, the next layers will be:

- `src/features/gameplay`
  Flagship pattern game logic, feedback loops, and difficulty tuning.
- `src/features/progression`
  Garden growth, unlockables, and session rewards.
- `src/features/parent`
  Parent-facing summaries and learning progress views.

## Product Intent

The MVP is being designed around a simple principle: every solved pattern should help the child grow a world they care about, while every session should produce progress parents can understand at a glance.
