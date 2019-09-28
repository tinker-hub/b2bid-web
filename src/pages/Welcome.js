import React from 'react';

import { Button } from '../components/Button';

import { unitsCollection } from '../utils/firebase-collections/units.collection';
import { helper } from '../utils/helper';
import {
  useUnionbankApi,
  useUnionbankGetAccessToken,
  useUnionbankFundTransfer,
} from '../hooks/useUnionbankApi';

export const Welcome = () => {
  // const api = useUnionbankApi();
  // const users = api.users.me.get();
  const { execute } = useUnionbankGetAccessToken(
    'AAKZxJJVE8s99c8-4kqCH6zIeY5x_6NVsQr1xz2HPseAWu72l0Erj_o4Ypl9p08ZXMz_wuQQuHBiYXTK8jNxQY1SahYzbGC2GLcaKTVKXP4FT63aLDQDcNkQgsCHMXwrnMLQEvomjWj3_jGG6SdBK3-m-YK6dYMYjAZdZRtYpYGQY8IuE2_bcHpWG7Y8XBXyefr0hpQ5Pxa9PjftTpMjEScd-zUlW_z5eM8lvAw-H3jSDsI4PWRgLGG-mgzIyJBnJjho4COwqOGXa0T52AQj689fOR0xM1L-u54eLKTYMEsqqddoN3HELY5319F9Z4jx6f7KAjJs8KRNrCWnh2vqFTeLuxm9W-cwYnODB7xqHZN0lg',
  );
  const { execute: executeFundTransfer } = useUnionbankFundTransfer();
  return (
    <div>
      Welcome to B2Bid
      <br />
      <Button
        onClick={async () => {
          const data = await execute();
          const token = data.access_token;
          await executeFundTransfer(token);
          // await executeFundTransfer();
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
