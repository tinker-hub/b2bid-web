import React, { useEffect } from 'react';
import {
  useUnionbankGetAccessToken,
  useUnionbankFundTransfer,
} from '../hooks/useUnionbankApi';
import { unitsCollection } from '../utils/firebase-collections/units.collection';

export const Callback = props => {
  const { location } = props;
  const { search } = location;

  const code = search.substring(6);

  console.log('code: ', code);

  const {
    loading: loadingGetAccessToken,
    error: errorGetAccessToken,
    data: dataGetAccessToken,
    execute: executeGetAccessToken,
  } = useUnionbankGetAccessToken(code);

  const {
    loading: loadingFundTransfer,
    data: dataFundTransfer,
    execute: executeFundTransfer,
  } = useUnionbankFundTransfer();

  useEffect(() => {
    const execute = async () => {
      if (
        !loadingGetAccessToken &&
        !dataGetAccessToken &&
        !errorGetAccessToken
      ) {
        await executeGetAccessToken();
      }
      if (!loadingGetAccessToken && dataGetAccessToken) {
        await executeFundTransfer();
      }
    };
    execute();
  }, [
    dataGetAccessToken,
    loadingGetAccessToken,
    executeGetAccessToken,
    executeFundTransfer,
    errorGetAccessToken,
  ]);

  useEffect(() => {
    const execute = async () => {
      if (!loadingFundTransfer && dataFundTransfer) {
        // navigate
        alert(1);
        await unitsCollection.addInvestor();
      }
    };
    execute();
  }, [loadingFundTransfer, dataFundTransfer]);

  return <div></div>;
};
