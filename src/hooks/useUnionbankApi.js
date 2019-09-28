import { createApi } from '@synvox/api';
import axios from 'axios';

const { useApi: useUnionbankApi } = createApi(
  axios.create({
    baseURL: process.env.REACT_APP_UNIONBANK_BASE_URL,
  }),
);

export const useUnionbankGetAccessToken = code => {
  if (!code) {
    throw new Error('No code specified');
  }
  const api = useUnionbankApi();
  const { access_token: token } = api.convergent.v1.oauth2.token.post({
    grant_type: 'authorization_code',
    client_id: process.env.REACT_APP_UNIONBANK_CLIENT_ID,
    client_secret: process.env.REACT_APP_UNIONBANK_CLIENT_SECRET,
    code,
    // Own redirect?
    redirect_uri: 'https://api-uat.unionbankph.com/ubp/uat/v1/redirect',
  });
  return token;
};

export const useUnionbankFundTransfer = () => {
  const api = useUnionbankApi();
  const transferRequest = api.partners.v1.transfers.single.post({
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
  return transferRequest;
};

export { useUnionbankApi };
