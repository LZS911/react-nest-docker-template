const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, theme }) => {
  addUtilities({
    '.theme-menu': {
      '.ant-menu-item-selected': {
        backgroundColor: `${theme('backgroundColor.secondary')} !important`,
        color: theme('textColor.primary'),
      },
      '.ant-menu-item': {
        '&:hover': {
          color: theme('textColor.primary'),
        },
        '&::after': {
          borderColor: theme('backgroundColor.primary'),
        },
      },
      '.ant-menu-submenu-selected': {
        color: theme('textColor.primary'),
      },
      '.ant-menu-submenu': {
        '&:hover': {
          '.ant-menu-submenu-title': {
            '&:hover': {
              color: theme('textColor.primary'),
            },
            '.ant-menu-submenu-arrow': {
              color: theme('textColor.primary'),

              '&:after': {
                backgroundColor: theme('backgroundColor.primary'),
              },
              '&:before': {
                backgroundColor: theme('backgroundColor.primary'),
              },
            },
          },
        },
      },
    },
    '.dark': {
      '.theme-menu': {
        backgroundColor: `${theme('backgroundColor.darkMode')} !important`,
        '.ant-menu-item': {
          '&:hover': {
            color: theme('textColor.white'),
          },
        },
        '.ant-menu-item-selected': {
          backgroundColor: `rgb(255,255,255,0.05) !important`,
          color: `${theme('textColor.primary')} !important`,

          '.ant-menu-item-icon': {
            color: theme('textColor.primary'),
          },
        },
        '.ant-menu-sub': {
          background: theme('backgroundColor.black'),
        },
      },
    },
  });
});
