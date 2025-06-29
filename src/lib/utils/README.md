# utils Directory

This directory contains all general-purpose utility and helper functions for the project. Each file should export a single, focused utility or a set of closely related utilities (e.g., `dateUtils.ts`, `slugify.ts`).

## Guidelines for Adding Utilities

- Only include pure, reusable logic that is not tied to a specific feature or component.
- Prefer small, composable functions over large, monolithic helpers.
- Add clear JSDoc comments and example usage for each exported function.
- Write and colocate a corresponding `.test.ts` file for each utility.
- Avoid adding React hooks here—place those in the `lib/hooks` directory.
- If a utility grows too large or complex, consider splitting it into multiple files.

Keep this directory organized and easy to navigate for all contributors.
