export const USER_TOKEN = 'USER_TOKEN';

export const setItem = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getItem = (key) => {
  const value = window.localStorage.getItem(key);
  return value === null ? '' : value;
};

export const setToken = (value) => {
  setItem(USER_TOKEN, value);
};

export const clearToken = () => setToken('');

export const getToken = () => getItem(USER_TOKEN);
