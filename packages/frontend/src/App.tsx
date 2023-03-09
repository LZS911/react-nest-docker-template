import useTheme, {
  getCurrentColorSchemeStrings,
  useInitTheme,
} from './customHooks/useTheme';
import { useInitFontFamily } from './customHooks/useFontFamily';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const { isDark, currentColorScheme } = useTheme();
  getCurrentColorSchemeStrings(isDark, currentColorScheme);

  useInitTheme();
  useInitFontFamily();

  useEffect(() => {
    axios.get('/v1/users').then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <button>增加</button>
      <button>删除</button>
      <div>
        <input
          title="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>查询</button>
      </div>
    </div>
  );
}

export default App;
