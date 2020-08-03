/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
export default (env) => {
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
      location.reload(true);
      return false;
    },
  };

  // eslint-disable-next-line no-undef
  const connect = new Connect(env, options);
  connect.setup();
  return connect;
};
