module.exports = function () {
  return {
    files: [
      'src/**/*.js' // adjust if required 
    ],

    tests: [
      'test/**/*.test.js' // adjust if required
    ],

    env: {
      type: 'node'
    }
  };
};
