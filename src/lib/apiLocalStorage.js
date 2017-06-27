const localStorageKey = "qwertyuiopasdfghjklzxcvbnm";

export default {
  getToken() {
    return window.localStorage.getItem(localStorageKey);
  },
  setToken(token) {
    window.localStorage.setItem(localStorageKey, token);
  }
};
