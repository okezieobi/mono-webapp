/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
const saveToLocalStore = (prop, value) => {
  localStorage.setItem(prop, value);
};

const widget = (env) => {
  const options = {
    onSuccess(response) {
      alert(JSON.stringify(response));
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
  const connect = new Connect(env, options);
  connect.setup();
  return connect;
};

export {
  saveToLocalStore, widget,
};
