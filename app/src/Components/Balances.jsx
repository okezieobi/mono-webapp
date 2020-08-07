/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Dashboard from './Dashboard';
import appEnv from '../utils/Env';

export default function Balances() {
  const [transactions, setTransactions] = useState({});

  useEffect(() => {
    const monoId = localStorage.getItem('mono-app-id');
    const reqUrl = `${appEnv.url}/accounts/${monoId}`;
    fetch(reqUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'mono-sec-key': appEnv.monoSECRETKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <>
      <Dashboard>
        <div>
          <Typography>{transactions._id}</Typography>
          <Typography>{transactions.name}</Typography>
          <Typography>{transactions.bvn}</Typography>
          <Typography>{transactions.accountNumber}</Typography>
          <Typography>{transactions.currency}</Typography>
          <Typography>{transactions.type}</Typography>
          <Typography>{transactions.balance}</Typography>
        </div>
      </Dashboard>
    </>
  );
}
