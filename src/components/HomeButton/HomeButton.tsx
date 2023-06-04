import { HouseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export function HomeButton() {
  return (
    <Link to="/">
      <IconButton
        sx={{ color: 'inherit' }}
        size="large"
        aria-label="home button"
        aria-controls="home-button"
      >
        <HouseRounded />
      </IconButton>
    </Link>
  );
}
