const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, theme }) => {
  addUtilities({
    '.theme-popover': {
      '.ant-popover-inner-content': {
        padding: 0,
      },
    },
    '.dark': {
      '.theme-popover': {
        '.ant-popover-inner-content': {
          background: theme('backgroundColor.darkMode'),
          color: theme('textColor.white'),
        },
      },
    },
  });
});
