import React, { Suspense } from 'react';

import { createGlobalStyle } from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Listings from './pages/Listings';
import { ListingDetails } from './pages/ListingDetails';
import { Callback } from './pages/Callback';
import { ListingPayment } from './pages/ListingPayment';

export const App = () => (
  <>
    <Suspense fallback={<CircularProgress />}>
      <Router>
        {routes.map(({ exact, path, component: Component }) => (
          <Route exact={exact} key={path} component={Component} path={path} />
        ))}
      </Router>
    </Suspense>
    <GlobalStyle />
  </>
);

const routes = [
  {
    exact: true,
    component: Listings,
    path: '/listings',
  },
  {
    component: ListingDetails,
    exact: true,
    path: '/listings/:listingId',
  },
  {
    component: ListingPayment,
    exact: true,
    path: '/listings/:listingId/payments',
  },
  {
    component: Callback,
    path: '/callback',
  },
  {
    path: '/',
    exact: true,
    component: Listings,
  },
];

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
