import React from 'react';
import { useTheme, Box } from '@material-ui/core';

export const PageContainer = props => {
  const theme = useTheme();

  return (
    <Box
      {...props}
      pb={5}
      pt={5}
      style={{ paddingTop: theme.spacing(5), paddingBottom: theme.spacing(5) }}
    />
  );
};
