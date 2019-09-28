import React from 'react';

import { Button } from '../components/Button';

import { unitsCollection } from '../utils/firebase-collections/units.collection';
import { helper } from '../utils/helper';
import {
  useUnionbankApi,
  useUnionbankGetAccessToken,
} from '../hooks/useUnionbankApi';

export const Welcome = () => {
  // const api = useUnionbankApi();
  // const users = api.users.me.get();
  const { data, execute } = useUnionbankGetAccessToken(
    'AAJl66FdC1i7sh40rM_uQgeyxVf7P2T0-PHGD9VvQ46EbCYPCOpDRAvmIM6dWkb9qtPgbyu6poddBc4c7kAIGjBzWkmuT_jLSJl-KmgaBY5I_I7GR5aiYyJxFT87r9ADp0jMJUKw2WBtC-eEcDK50oX75lYbnXtP5sa2ppStubontmhFq4WkLBMC0HDEwc8vFvzygqvJ-dgb7usuOxmOWhU0KwpgqiUOsMFkO7l7ZK1H0k9-lF912H4BiXqcba7rS-3DtPjYOm4fpgN0_O53yjY9dDvtSIF14NPtkr0nywS0Ei_CLhoAVR3kqrIy4YjECQ7I4YvoZZsFosMdtt-XcH0mY0oeCqHBpK5OvEKqIdJAPw',
  );
  console.log(data);
  return (
    <div>
      Welcome to B2Bid
      <br />
      <Button
        onClick={async () => {
          await execute();
          // const unitId = 'eL3XrGvQt5gs9xnWgQ1a';
          // const res = await unitsCollection.addInvestor(unitId, {
          //   id: 'RuMLk8AxNzlWdGO7iPvR'
          // });
          // console.log(res);

          // const res = await helper.runFixtures();
          // const res = await unitsCollection.getAll();
          // console.log(res);
        }}
      >
        Click Here
      </Button>
    </div>
  );
};
