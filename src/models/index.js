const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

req.keys().forEach((key) => {
  const modelName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[modelName] = req(key).default
})
