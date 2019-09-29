import { useState } from 'react';
import { createApi } from '@synvox/api';
import axios from 'axios';
import qs from 'querystring';

const unionBankAxios = axios.create({
  baseURL: process.env.REACT_APP_UNIONBANK_BASE_URL,
});

const { useApi: useUnionbankApi } = createApi(unionBankAxios);

export const useUnionbankGetAccessToken = code => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async () => {
    setLoading(false);

    const body = qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_UNIONBANK_CLIENT_ID,
      code,
      redirect_uri: process.env.REACT_APP_UNIONBANK_REDIRECT_URI,
    });

    try {
      /**
       * {
       *    access_token
       * }
       */
      const response = await unionBankAxios.post(
        '/convergent/v1/oauth2/token',
        body,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html',
            'x-ibm-client-id': process.env.REACT_APP_UNIONBANK_CLIENT_ID,
            'x-ibm-client-secret':
              process.env.REACT_APP_UNIONBANK_CLIENT_SECRET,
          },
        },
      );
      setData(response.data);
      setLoading(false);
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (!code) {
    setError('No code specified');
  }
  return {
    execute,
    data,
    error,
    loading,
  };
};

export const useUnionbankFundTransfer = () => {
  const [data] = useState({
    paymentId: 'UB2985127673018',
    createdAt: '2015-10-03T15:29:16.333',
    state: 'Payment Succesful',
    senderPaymentId: '12345678',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async () => {
    try {
      setLoading(true);

      // const body = JSON.stringify({
      //   senderTransferId: 'TRANSFER-0001',
      //   transferRequestDate: '2017-10-10T12:11:50Z',
      //   accountNo: '109594480006',
      //   amount: {
      //     currency: 'PHP',
      //     value: '100',
      //   },
      //   remarks: 'Transfer remarks',
      //   particualtrs: 'Transfer particulars',
      //   info: [
      //     {
      //       index: 1,
      //       name: 'Recipient',
      //       value: 'Juan Dela Cruz',
      //     },
      //     {
      //       index: 2,
      //       name: 'Message',
      //       value: 'Happy Investment',
      //     },
      //   ],
      // });

      // const response = await unionBankAxios.post(
      //   '/partners/v1/transfers/single',
      //   body,
      //   {
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded',
      //       Accept: 'text/html',
      //       'x-ibm-client-id': process.env.REACT_APP_UNIONBANK_CLIENT_ID,
      //       'x-ibm-client-secret':
      //         process.env.REACT_APP_UNIONBANK_CLIENT_SECRET,
      //       authorization: `Bearer ${token}`,
      //       'x-partner-id': '01bbb51e-1e6c-4bd4-af9c-450957522aac',
      //     },
      //   },
      // );
      setLoading(false);
      // setData(response.data);
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    execute,
    error,
    loading,
    data,
  };
};

export { useUnionbankApi };
