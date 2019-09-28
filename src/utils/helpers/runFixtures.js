import unitFixtures from '../fixtures/units';
import { unitsCollection } from '../firebase-collections/units.collection';

export const runFixtures = async () => {
  await unitsCollection.addAll(unitFixtures);
};
