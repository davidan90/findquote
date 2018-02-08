const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    api: {
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com',
    },
  },
  test: {},
  development: {},
  production: {
    api: {
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com',
    },
  },
}

module.exports = merge(config.all, config[config.all.env])
