import React from 'react';
import { Header } from './Header';
import { Box } from '@material-ui/core';

export const Layout = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
    </>
  );
};
