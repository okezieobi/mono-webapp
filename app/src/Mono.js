export default (env) => {
  /* eslint-disable no-alert */
  const options = {
    onSuccess(response) {
      alert(JSON.stringify(response));
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
