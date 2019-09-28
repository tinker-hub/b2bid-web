import React, { useState } from 'react';

import { useHistory, useLocation } from 'react-router';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
  Paper,
} from '@material-ui/core';
import {
  AccountBalanceWallet as AccountBalanceWalletIcon,
  AccountCircle as AccountCircleIcon,
  House as HouseIcon,
} from '@material-ui/icons';

export const Header = () => {
  const location = useLocation();

  const history = useHistory();

  let initialValue;
  switch (location.pathname) {
    case '/listings':
      initialValue = 0;
      break;
    case '/portfolio':
      initialValue = 1;
      break;
    default:
      initialValue = 0;
  }

  const [value, setValue] = useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(navigationRoutesTab[newValue]);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            Blox
          </Typography>
          <Box>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Paper>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          variant="standard"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Listings" icon={<HouseIcon />} />
          <Tab label="Portfolio" icon={<AccountBalanceWalletIcon />} />
        </Tabs>
      </Paper>
    </Box>
  );
};

const navigationRoutesTab = {
  0: '/listings',
  1: '/portfolio',
};
