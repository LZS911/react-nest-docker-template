import useTheme, {
  getCurrentColorSchemeStrings,
  useInitTheme,
} from './customHooks/useTheme';
import { useInitFontFamily } from './customHooks/useFontFamily';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const { isDark, currentColorScheme } = useTheme();
  getCurrentColorSchemeStrings(isDark, currentColorScheme);

  useInitTheme();
  useInitFontFamily();

  useEffect(() => {
    const instance = axios.create();
    console.log('object');
    instance.get('/hello').then((res) => {
      console.log(res);
    });
  }, []);

  return ' Hello nest2';
}

export default App;
