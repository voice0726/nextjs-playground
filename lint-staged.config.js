module.exports = {
  '*.{ts,tsx}': ['pnpm run lint:check', "bash -c 'pnpm run types:check'", 'pnpm run prettier:check'],
  '*': ['secretlint'],
};
