# nextjs-playground

## What is this?

This is my playground where I test or practice TypeScript, Next.js, and related libraries.

## Stack

- React 19
- Next.js 15
- Auth.js
- eslint 9
- prettier 3
- vitest 3
- react-table
- zod
- headlessui
- panda css

## Backend

The backend api for this playground can be found [here](https://github.com/voice0726/backend-for-my-nextjs-playground)

## CD/CI

- tests using github actions
- renovate
- qodana (now trying)

## TODO

- compare form libraries such as react-hook-form
  - currently forms are implemented with React 19 action functions
- consider state management and data fetching strategies
  - currently data fetching relies on server components
    - fetched data are directly passed to client components
    - needs comparison with tanstack query or other data fetch strategies
  - other global states related to UI are managed with react contexts 
- add new features
- add tests
- etc.
- deploy to vercel or other clouds