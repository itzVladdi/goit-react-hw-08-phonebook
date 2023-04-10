import axios from 'axios';

// const $publicHost = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

// const $privateHost = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

// const authInterceptor = config => {
//   const localData = JSON.parse(localStorage.getItem('persist:token'));
//   config.headers['Authorization'] = JSON.parse(localData.token);
//   return config;
// };

// $privateHost.interceptors.request.use(authInterceptor);

/*
    const $privateHost = axios.create({
        baseURL: "https://connections-api.herokuapp.com/",
        headers: {
            "Authorization": localStorage.getItem('token')
        }
    });
*/

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const UserAPI = {
  login: async formData => {
    const { data } = await axios.post('users/login', formData);
    setAuthHeader(data.token);
    return data;
  },
  register: async formData => {
    const { data } = await axios.post('users/signup', formData);
    setAuthHeader(data.token);
    return data;
  },
  logout: async () => {
    const { data } = await axios.post('users/logout');
    clearAuthHeader();
    return data;
  },
  refresh: async () => {
    const { data } = await axios.get('users/current');

    return data;
  },
};

export const ContactsAPI = {
  getContacts: async () => {
    const { data } = await axios.get('contacts');

    return data;
  },
  addContact: async formData => {
    const { data } = await axios.post('contacts', formData);

    return data;
  },
  deleteContact: async contactId => {
    const { data } = await axios.delete(`contacts/${contactId}`);

    return data;
  },
};
