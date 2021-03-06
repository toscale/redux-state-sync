
/* global window Event*/
let store = {};
const localStorageMock = {
  getItem(key) {
    return store[key];
  },
  setItem(key, value) {
    store[key] = value.toString();
    Event.prototype.newValue = JSON.stringify({
      stampedAction: JSON.parse(value).stampedAction,
    });
    window.dispatchEvent(new Event('storage'));
  },
  clear() {
    store = {};
  },
};

global.localStorage = localStorageMock;
