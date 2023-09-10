import React from 'react';
import authStore from '../stores/authStore';

const ErrorPage = () => {
  const store = authStore();
  return (
    <>
      <div>ErrorPage</div>
      <h1>{store.error.message}</h1>
    </>
  );
};

export default ErrorPage;
