import React from 'react';
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
  AccountCircle as AccountCircleIcon,
  Favorite as FavoriteIcon,
  Phone as PhoneIcon,
  House as HouseIcon,
} from '@material-ui/icons';

export const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu> */}
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
        </Tabs>
      </Paper>
    </Box>
  );
};
