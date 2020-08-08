/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import Dashboard from './Dashboard';
import appEnv from '../utils/Env';

export default function Account() {
  const [accounts, setAccount] = useState({});
  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'bvn',
      label: 'BVN',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'accountNumber',
      label: 'Account Number',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'currency',
      label: 'Currency',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'balance',
      label: 'Balance',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'type',
      label: 'Type',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    filterType: 'checkbox',
  };

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
      .then((result) => setAccount(result));
  }, []);

  return (
    <>
      <Dashboard>
        <MUIDataTable
          title="Account(s)"
          columns={columns}
          options={options}
          data={Array.isArray(accounts)
            ? [...accounts].map(({
              _id, name, bvn, accountNumber, currency, balance, type,
            }) => ({
              id: _id, name, bvn, accountNumber, currency, balance, type,
            }))
            : [{
              id: accounts._id,
              name: accounts.name,
              bvn: accounts.bvn,
              accountNumber: accounts.accountNumber,
              currency: accounts.currency,
              balance: accounts.balance,
              type: accounts.type,
            }]}
        />
      </Dashboard>
    </>
  );
}
