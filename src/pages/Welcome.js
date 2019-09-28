import React from 'react';

import { Button } from '../components/Button';
import { unitsCollection } from '../utils/firebase-collections/units.collection';

export const Welcome = () => {
  return (
    <div>
      Welcome to B2Bid
      <br />
      <Button
        onClick={async () => {
          // const unitId = 'eL3XrGvQt5gs9xnWgQ1a';
          // const res = await unitsCollection.addInvestor(unitId, {
          //   id: 'RuMLk8AxNzlWdGO7iPvR'
          // });
          // console.log(res);

          const res = await unitsCollection.getAll();
          console.log(res);
        }}
      >
        Click Here
      </Button>
    </div>
  );
};
