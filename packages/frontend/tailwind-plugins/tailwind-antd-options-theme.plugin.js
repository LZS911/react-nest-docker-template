const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, theme }) => {
  addUtilities({
    '.theme-options': {
      padding: '2px !important',
      '.ant-popover-arrow': {
        display: 'none',
      },
      '.ant-popover-inner-content': {
        padding: '0',
      },
    },
    '.dark': {
      '.theme-options': {},
    },
  });
});
