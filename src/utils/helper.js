import Chance from 'chance';

import { cap } from './helpers/cap';
import { runFixtures } from './helpers/runFixtures';

const chance = new Chance();

export const helper = {
  chance,
  cap,
  runFixtures,
};
