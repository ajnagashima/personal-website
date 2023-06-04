import {
  IconButton, Menu, MenuItem, Typography,
} from '@mui/material';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import styles from './UserMenuButton.module.scss';

const accountOptions = [
  { id: 'profile', href: '/profile', text: 'Profile' },
  { id: 'my_account', text: 'My Account', href: '/account' },
  { id: 'logout', text: 'Logout', href: '/logout' },
];

function UserMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="app-bar-user-menu"
        aria-haspopup="true"
        onClick={handleUserMenuClick}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="app-bar-user-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleUserMenuClose}
      >
        {accountOptions.map((option) => (
          <Link className={styles.link} key={option.id} to={option.href}>
            <MenuItem onClick={handleUserMenuClose}>
              <Typography textAlign="center">{option.text}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
}

export default UserMenuButton;
