export default class Base {
  // token = '';
  // httpClient = null;
  constructor(initState = {}) {
    for (const k in initState) {
      if (Object.prototype.hasOwnProperty.call(initState, k)) {
        this[k] = initState[k];
      }
    }
  }
}
