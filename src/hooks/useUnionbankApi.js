import { createApi } from '@synvox/api';
import axios from 'axios';

const { useApi: useUnionbankApi } = createApi(
  axios.create({
    baseURL: process.env.REACT_APP_UNIONBANK_BASE_URL,
  }),
);

export { useUnionbankApi };
