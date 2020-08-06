/* eslint-disable no-alert */
import { config } from 'dotenv';

config();

const fetchApi = async ({
  inputData = {}, endpoint = '',
  requestMethod = 'GET', auth = '',
}) => {
  try {
    const response = await fetch(`https://api.withmono.com/${endpoint}`,
      {
        method: requestMethod,
        body: JSON.stringify(inputData),
        headers: {
          'Content-Type': 'application/json',
          token: auth,
          'mono-sec-key': process.env.REACT_APP_MONO_SECRET_KEY,
        },
      });
    return response.json();
  } catch (error) {
    return error;
  }
};

const widget = () => {
  const options = {
    onSuccess({ code }) {
      // JSON.stringify(response);
      localStorage.setItem('mono_app_code', code);
      window.location.href = '/dashboard';
      /*
      response : { "code": "code_xyz" }
      you can send this code back to your server to get this
      authenticated account and start making requests.
      */
    },
    onClose() {
      alert('user closed the widget.');
    },
  };

  // eslint-disable-next-line no-undef
  const connect = new Connect(process.env.REACT_APP_MONO_KEY, options);
  connect.setup();
  return connect;
};

const enrollUsers = async () => {
  const monoCode = localStorage.getItem('mono_app_code');
  const { id } = await fetchApi({
    inputData: { code: monoCode },
    endpoint: 'account/auth',
    requestMethod: 'POST',
  });
  localStorage.setItem('mono_app_id', id);
};

const getTransactions = async () => {
  const monoId = localStorage.getItem('mono_app_id');
  const transactions = await fetchApi({
    endpoint: `accounts/:${monoId}/`,
  });
  return transactions;
};

export {
  widget, enrollUsers, getTransactions,
};
