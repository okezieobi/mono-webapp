import React from 'react';

export default function Dashboard() {
  return (
    <>
      <p>Dashboard</p>
      <p>{localStorage.getItem('mono_app_code')}</p>
      <p>{localStorage.getItem('mono_app_firstname')}</p>
      <p>{localStorage.getItem('mono_app_lastname')}</p>
      <p>{localStorage.getItem('mono_app_email')}</p>
      <p>{localStorage.getItem('mono_app_amount')}</p>
    </>
  );
}
