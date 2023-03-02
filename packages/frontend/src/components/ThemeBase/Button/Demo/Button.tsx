import { ThemeModeEnum, ColorSchemeEnum } from '../../../../common/enum';
import useTheme from '../../../../customHooks/useTheme';
import useUserConfig from '../../../../customHooks/useUserConfig';
import ThemeBase from '../..';

const ButtonDemo: React.FC = () => {
  const { changeColorScheme, changeThemeMode, currentThemeMode } = useTheme();
  const { signOut } = useUserConfig();
  return (
    <div>
      <ThemeBase.Button
        type="link"
        danger
        onClick={() => {
          if (currentThemeMode === ThemeModeEnum.Dark) {
            changeThemeMode(ThemeModeEnum.Light);
          } else {
            changeThemeMode(ThemeModeEnum.Dark);
          }
        }}
      >
        changeThemeMode
      </ThemeBase.Button>
      <ThemeBase.Button
        type="primary"
        onClick={() => changeColorScheme(ColorSchemeEnum.Blue)}
      >
        blue
      </ThemeBase.Button>
      <ThemeBase.Button
        type="secondary"
        onClick={() => changeColorScheme(ColorSchemeEnum.Purple)}
      >
        purple
      </ThemeBase.Button>
      <ThemeBase.Button
        onClick={() => changeColorScheme(ColorSchemeEnum.Green)}
      >
        green
      </ThemeBase.Button>
      <ThemeBase.Button type="dashed">dashed</ThemeBase.Button>
      <ThemeBase.Button type="ghost">ghost</ThemeBase.Button>
      <ThemeBase.Button type="default">default</ThemeBase.Button>
      <ThemeBase.Button danger onClick={signOut}>
        danger
      </ThemeBase.Button>
    </div>
  );
};

export default ButtonDemo;
