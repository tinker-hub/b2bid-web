import React, { useState } from 'react';

import { useHistory, useLocation } from 'react-router';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Paper,
  Button,
  useTheme,
} from '@material-ui/core';
import {
  AccountBalanceWallet as AccountBalanceWalletIcon,
  AccountCircle as AccountCircleIcon,
  House as HouseIcon,
} from '@material-ui/icons';

export const Header = props => {
  const { hideTabNavigation } = props;

  const theme = useTheme();

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
          <Box style={{ flex: 1 }}>
            <Button
              onClick={() => history.push('/listings')}
              style={{ color: theme.palette.primary.contrastText }}
              variant="h6"
            >
              Blox
            </Button>
          </Box>

          <Box>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {!hideTabNavigation && (
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
      )}
    </Box>
  );
};

const navigationRoutesTab = {
  0: '/listings',
  1: '/portfolio',
};
