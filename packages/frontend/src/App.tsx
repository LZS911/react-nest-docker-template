import RouterComponent from './router';
import { ConfigProvider } from 'antd';
import useTheme, {
  getCurrentColorSchemeStrings,
  useInitTheme,
} from './customHooks/useTheme';
import { useInitFontFamily } from './customHooks/useFontFamily';

function App() {
  const { isDark, currentColorScheme } = useTheme();
  const [primaryColor] = getCurrentColorSchemeStrings(
    isDark,
    currentColorScheme
  );

  ConfigProvider.config({
    theme: {
      primaryColor,
    },
  });

  useInitTheme();
  useInitFontFamily();

  return (
    <ConfigProvider>
      <RouterComponent />
    </ConfigProvider>
  );
}

export default App;
