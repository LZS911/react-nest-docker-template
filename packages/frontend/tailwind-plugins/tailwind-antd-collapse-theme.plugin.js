const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, theme }) => {
  addUtilities({
    '.theme-collapse': {
      '.ant-collapse-arrow': {
        color: theme('textColor.primary'),
      },
    },
    '.dark': {
      '.theme-collapse': {
        backgroundColor: `${theme('backgroundColor.darkMode')}`,
        border: '1px solid #434343',
        borderLeft: '0',
        borderTop: '0',

        '.ant-collapse-item': {
          border: '1px solid #434343',
          borderBottom: '0',
        },
        '.theme-collapse-panel': {
          '.ant-collapse-header': {
            color: theme('textColor.white'),
          },
          '.ant-collapse-content': {
            color: theme('textColor.white'),
            backgroundColor: '#000 !important',
            borderTop: '1px solid #434343',
          },
        },
      },
    },
  });
});
