import React from 'react';
import { useUnionbankGetAccessToken } from '../hooks/useUnionbankApi';

export const Callback = props => {
  const { location } = props;
  const { search } = location;

  const code = search.substring(6);

  console.log('code: ', code);

  const token = useUnionbankGetAccessToken(code);

  console.log('token: ', token);

  return <div></div>;
};
