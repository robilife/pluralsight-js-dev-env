// this file isn't transpiled, so must CommonJS and ES5

//Register bable to transpile before our test run.
require('babel-register');

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};