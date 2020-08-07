import { config } from 'dotenv';

config();

export default {
  monoPublicKey: process.env.REACT_APP_MONO_KEY,
  monoSECRETKey: process.env.REACT_APP_MONO_SECRET_KEY,
  url: 'https://api.withmono.com',
};
