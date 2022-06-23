module.exports = {
  './*.js': () => ['npm run lint'],
  'src/*.{ts,tsx}': () => ['npm run lint', 'npm run typescript'],
};
