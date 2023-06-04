import { PaletteOptions } from '@mui/material';

export const palette = (mode = 'light'): PaletteOptions => {
  return mode === 'light'
    ? {
      background: {
        default: '#ffffff',
        paper: '#fffff',
      },
      text: {
        primary: '#161616',
        secondary: '#525252',
      },
    }
    : {
      background: {
        default: '#262626',
        paper: '#262626',
      },
      text: {
        primary: '#f4f4f4',
        secondary: '#c6c6c6',
      },
    };
};
