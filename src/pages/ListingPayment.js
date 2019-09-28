import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ListingItem } from '../components/ListingItem';
import { unitsCollection } from '../utils/firebase-collections/units.collection';
import { Layout } from '../components/Layout';
import { PageContainer } from '../components/PageContainer';

export const ListingPayment = () => {
  const theme = useTheme();

  return (
    <Layout>
      <PageContainer style={{ spacing: theme.spacing(3) }}>
        <Container>Payments</Container>
      </PageContainer>
    </Layout>
  );
};
