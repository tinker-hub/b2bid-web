import { useState, useEffect } from 'react';
import { createApi } from '@synvox/api';
import axios from 'axios';

const unionBankAxios = axios.create({
  baseURL: process.env.REACT_APP_UNIONBANK_BASE_URL,
});

const { useApi: useUnionbankApi } = createApi(unionBankAxios);

export const useUnionbankGetAccessToken = code => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const execute = async () => {
      setLoading(false);

      try {
        const response = await unionBankAxios.post(
          '/convergent/v1/oauth2/token',
          {
            grant_type: 'authorization_code',
            client_id: process.env.REACT_APP_UNIONBANK_CLIENT_ID,
            code,
            redirect_uri: process.env.REACT_APP_UNIONBANK_REDIRECT_URI,
          },
        );
        setData(response);
        setLoading(false);
        return data;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    execute();
  }, [data, loading]);

  if (!code) {
    setError('No code specified');
  }
  return {
    data,
    error,
    loading,
  };
};

export const useUnionbankFundTransfer = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const execute = async () => {
      try {
        setLoading(true);
        const response = await unionBankAxios.post(
          '/partners/v1/transfers/single',
          {
            senderTransferId: 'TRANSFER-0001',
            transferRequestDate: '2017-10-10T12:11:50Z',
            accountNo: '0001',
            amount: {
              currency: 'PHP',
              value: '100',
            },
            remarks: 'Transfer remarks',
            particualtrs: 'Transfer particulars',
            info: [
              {
                index: 1,
                name: 'Recipient',
                value: 'Juan Dela Cruz',
              },
              {
                index: 2,
                name: 'Message',
                value: 'Happy Investment',
              },
            ],
          },
        );
        setLoading(false);
        setData(response);
        return response;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    execute();
  }, [error, loading, data]);

  return {
    error,
    loading,
    data,
  };
};

export { useUnionbankApi };
