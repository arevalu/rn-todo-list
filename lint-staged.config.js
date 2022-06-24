module.exports = {
  '*.js': () => ['npm run lint'],
  '*.{ts,tsx}': () => ['npm run lint', 'npm run typescript'],
};
