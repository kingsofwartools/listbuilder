import React from 'react';
import { useCookies } from 'react-cookie';

export const useCookiesEnabled = () => {
  const [cookies, setCookie] = useCookies(['test']);
  
  setCookie('test', 'value', { path: '/', expires: (new Date('1 Jan 2100 00:00:00 GMT')) });

  return !!cookies.test;
};
