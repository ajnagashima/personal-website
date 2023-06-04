import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import { HomeButton } from '../HomeButton/HomeButton';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import UserMenuButton from '../UserMenuButton';

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <HomeButton />
        <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
          <Button sx={{ my: 2, color: 'inherit', display: 'block' }}>
            <Typography>Home</Typography>
          </Button>
        </Box>
        <ThemeSwitcher />
        <UserMenuButton />
      </Toolbar>
    </AppBar>
  );
}
