import { createApi } from '@synvox/api';
import axios from 'axios';

const unionBankAxios = axios.create({
  baseURL: process.env.REACT_APP_UNIONBANK_BASE_URL,
});

const { useApi: useUnionbankApi } = createApi(unionBankAxios);

export const useUnionbankGetAccessToken = code => {
  if (!code) {
    throw new Error('No code specified');
  }
  return unionBankAxios.post('/api/convergent/v1/oauth2/token', {
    grant_type: 'authorization_code',
    client_id: process.env.REACT_APP_UNIONBANK_CLIENT_ID,
    client_secret: process.env.REACT_APP_UNIONBANK_CLIENT_SECRET,
    code,
    redirect_uri: process.env.REACT_APP_UNIONBANK_REDIRECT_URI,
  });
};

export const useUnionbankFundTransfer = () => {
  return unionBankAxios.post('/api/partners/v1/transfers/single', {
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
  });
};

export { useUnionbankApi };
