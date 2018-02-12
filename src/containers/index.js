const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

req.keys().forEach((key) => {
  const containerName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[containerName] = req(key).default
})
