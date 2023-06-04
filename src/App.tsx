import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeModeContext } from './context';
// import { AccountPage, HomePage, Layout } from './pages';
import HomePage from './pages';
import AccountPage from './pages/AccountPage';
import Layout from './pages/Layout';
import { palette, typography } from './theme';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const theme = createTheme({
    spacing: (factor: number) => `${0.25 * factor}rem`,
    palette: palette(themeMode),
    typography,
  });

  return (
    <ThemeModeContext.Provider
      value={useMemo(() => {
        return { mode: themeMode, setMode: setThemeMode };
      }, [themeMode, setThemeMode])}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='' element={<HomePage />} />
              <Route path='/account' element={<AccountPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
