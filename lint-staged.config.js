module.exports = {
  '*.{ts,tsx}': [
    'pnpm run lint',
    "bash -c 'pnpm run types:check'",
    'pnpm run format:check',
  ],
};
