const viteWatchI18nPrettierConfig = require('vite-plugin-watch-i18/dist/prettier.config');

module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  ...viteWatchI18nPrettierConfig,
};
