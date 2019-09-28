import React, { Suspense } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { ProjectDetails } from './pages/ProjectDetails';

export const App = () => (
  <div className="App">
    <Suspense fallback={<CircularProgress />}>
      <ProjectDetails />
    </Suspense>
  </div>
);
