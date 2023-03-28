import axios from 'axios';
const key ='120138ed-86b8-4ef4-9fb1-d8a1d270bcc6';
axios.interceptors.request.use(function (config) {
    config.headers['X-APP-KEY'] = key;
    return config;
  }, null, { synchronous: true });

export default axios
