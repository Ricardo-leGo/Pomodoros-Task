import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'Production Endpoint')
  : (baseURL = 'http://localhost:3000');

const SERVICE = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICES = {
  test: async () => {
    return await SERVICE.get('/');
  },
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('/login', user);
  },
  logOut: async () => {
    return await SERVICE.get('/logout');
  }
}

export default AUTH_SERVICES;