/**
 * add requestAnimationFrame because jest does not provide it and react depends on it. Even in tests.
 * See Also: https://github.com/facebook/jest/issues/4545 && https://github.com/facebook/jest/issues/1644
 **/
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

/**
 * Mock fetch for jest tests
 */
global.fetch = jest.fn().mockImplementation(() => {
  var p = new Promise(resolve => {
    resolve({
      json() {
        return {};
      },
    });
  });

  return p;
});

let mockStorage = {};
global.localStorage = {
  setItem: (key, val) => {
    mockStorage[key] = val;
  },
  getItem: (key) => mockStorage[key],
  clear: () => {
    mockStorage = {};
  }
};
