# Custom React Hooks

This directory contains all custom React hooks used throughout the project.

## Purpose

- Centralizes reusable logic for state, effects, and UI behavior.
- Promotes code consistency and maintainability across the codebase.

## Guidelines for Adding Hooks

- Only include hooks that are shared or reused in multiple components.
- Name hooks using the `use` prefix (e.g., `useTheme`).
- Document the hook's purpose, parameters, and return values.
- Ensure hooks are well-tested and do not introduce side effects outside React’s lifecycle.
- Avoid duplicating logic that already exists in this directory.
