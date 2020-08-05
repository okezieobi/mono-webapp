/* eslint-disable no-alert */
import { config } from 'dotenv';

config();

export default () => {
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
