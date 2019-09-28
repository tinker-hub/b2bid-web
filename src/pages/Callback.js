import React, { useEffect } from 'react';
import {
  useUnionbankGetAccessToken,
  useUnionbankFundTransfer,
} from '../hooks/useUnionbankApi';

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
  ]);

  useEffect(() => {
    if (!loadingFundTransfer && dataFundTransfer) {
      // navigate
      alert(1);
    }
  }, [loadingFundTransfer, dataFundTransfer]);

  return <div></div>;
};
