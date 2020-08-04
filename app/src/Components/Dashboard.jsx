import React from 'react';

export default function Dashboard() {
  return (
    <>
      <p>Dashboard</p>
      <p>{localStorage.getItem('mono_app_code')}</p>
    </>
  );
}
