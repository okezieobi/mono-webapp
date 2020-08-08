/* eslint-disable no-alert */
import appEnv from '../utils/Env';

const widget = () => {
  const options = {
    onSuccess({ code }) {
      // JSON.stringify(response);
      const reqUrl = `${appEnv.url}/account/auth`;
      fetch(reqUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'mono-sec-key': appEnv.monoSECRETKey,
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then(({ id }) => localStorage.setItem('mono-app-id', id));

      window.location.href = '/accounts';
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
  const connect = new Connect(appEnv.monoPublicKey, options);
  connect.setup();
  connect.open();
};

export default widget;
