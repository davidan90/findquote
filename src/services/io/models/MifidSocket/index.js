const io = require('socket.io-client')

export class MifidSocket {
  constructor(url, options = {}) {
    this.url = url
    this.options = options
    this.socket = this.connect()
  }

  connect() {
    return io(this.url, this.options)
  }

  onConnect(action) {
    this.socket.on('connect', action)
  }

  onDisconnect(action) {
    this.socket.on('disconnect', action)
  }

  emit(event, data, cb) {
    this.socket.emit(event, data, typeof cb === 'function' ? cb : undefined)
  }

  listen(event, action) {
    this.socket.on(event, action)
  }
}
