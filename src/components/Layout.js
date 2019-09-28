import React from 'react';
import { Header } from './Header';
import { Box } from '@material-ui/core';

export const Layout = props => {
  const { children, hideTabNavigation } = props;

  return (
    <>
      <Header hideTabNavigation={hideTabNavigation} />
      <Box component="main">{children}</Box>
    </>
  );
};
