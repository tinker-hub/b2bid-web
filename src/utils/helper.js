import Chance from 'chance';

import { cap } from './helpers/cap';
import { runFixtures } from './helpers/runFixtures';

const chance = new Chance();

export const helper = {
  chance,
  cap,
  runFixtures,
  unionbankOath: () => {
    window.location.href = `${process.env.REACT_APP_UNIONBANK_BASE_URL}/convergent/v1/oauth2/authorize?response_type=code&client_id=${process.env.REACT_APP_UNIONBANK_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_UNIONBANK_REDIRECT_URI}&scope=payments`;
  },
};
