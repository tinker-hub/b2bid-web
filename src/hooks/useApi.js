import { createApi } from '@synvox/api';
import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

// https://github.com/Synvox/api
const { useApi } = createApi(
  axios.create({
    baseURL: process.env.BASE_URL,
  }),
);

export { useApi };
