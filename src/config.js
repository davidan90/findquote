const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
    io: {
      socketUrl: 'ws://10.5.3.14:9000',
      options: {
        path: '/socket.io-client',
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
      },
    },
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
}

module.exports = merge(config.all, config[config.all.env])
