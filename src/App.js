import React, { Suspense } from 'react';

import { createGlobalStyle } from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Listings from './pages/Listings';
import { ListingDetails } from './pages/ListingDetails';
import { BuyBlocks } from './pages/BuyBlocks';
import { Callback } from './pages/Callback';
import { Portfolio } from './pages/Portfolio';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Test } from './pages/Test';

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
  { path: '/', exact: true, component: Login },
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
    component: BuyBlocks,
    exact: true,
    path: '/listings/:listingId/buy-blocks',
  },
  {
    component: Callback,
    path: '/callback',
  },
  {
    component: Portfolio,
    path: '/portfolio',
  },
  {
    component: SignUp,
    path: '/signup',
  },
  {
    component: Test,
    path: '/test',
  },
];

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
