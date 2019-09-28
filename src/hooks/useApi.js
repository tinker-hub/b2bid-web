import { createApi } from '@synvox/api';
import axios from 'axios';

// https://github.com/Synvox/api
const { useApi } = createApi(
  axios.create({
    baseURL: process.env.BASE_URL,
  }),
);

export { useApi };
