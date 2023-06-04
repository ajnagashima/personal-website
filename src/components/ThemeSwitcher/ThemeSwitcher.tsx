import { Brightness5, DarkMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ThemeModeContext } from '../../context';

export function ThemeSwitcher() {
  const toggleMode = (mode: string) => {
    return mode === 'light' ? 'dark' : 'light';
  };

  return (
    <ThemeModeContext.Consumer>
      {({ mode, setMode }) => (
        <IconButton
          sx={{ color: 'inherit' }}
          size="large"
          aria-label="dark mode button"
          aria-controls="dark-mode-button"
          onClick={() => {
            setMode((prev: string) => toggleMode(prev));
          }}
        >
          {mode === 'light' && <DarkMode />}
          {mode === 'dark' && <Brightness5 />}
        </IconButton>
      )}
    </ThemeModeContext.Consumer>
  );
}
