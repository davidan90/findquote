import { io } from 'config'
import { MifidSocket } from './models/MifidSocket'
import { IOProvider } from './provider/IOProvider'

let client

const isFunction = cb => typeof cb === 'function'

const getInstance = (connectAction, disconnectAction) => {
  if (!client) {
    client = {}
    const mifidSocket = new MifidSocket(io.socketUrl, io.options)

    if (connectAction) { mifidSocket.onConnect(connectAction) }
    if (disconnectAction) { mifidSocket.onDisconnect(disconnectAction) }

    const authentication = (data, failedReconnectAction) => {
      mifidSocket.emit('authentication', data)
      if (isFunction(failedReconnectAction)) {
        mifidSocket.listen('reconnect_failed', failedReconnectAction)
      }
    }

    const authenticated = (action) => {
      mifidSocket.listen('authenticated', action)
    }

    const findUserEntities = (entities = {}) => new Promise((resolve, reject) => {
      mifidSocket.emit('Users::getUserMifidEntities', entities, (error, data) => {
        if (error) { reject(error) }
        resolve(data)
      })
    })

    const insertFilterEntity = (entity = { id: null }) => new Promise((resolve, reject) => {
      mifidSocket.emit('Mfcontrols::insert', entity, (error, data) => {
        if (error) { reject(error) }
        resolve(data)
      })
    })

    const updateFilterEntity = (entity = { id: null }) => new Promise((resolve, reject) => {
      mifidSocket.emit('Mfcontrols::update', entity, (error, data) => {
        if (error) { reject(error) }
        resolve(data)
      })
    })

    const deleteFilterEntity = (idEntity) => {
      mifidSocket.emit('Mfcontrols::delete', idEntity)
    }

    client.emit = {
      authentication,
      findUserEntities,
      insertFilterEntity,
      updateFilterEntity,
      deleteFilterEntity,
    }
    client.listen = {
      authenticated,
    }
  }
  return client
}

const ws = {
  getInstance,
}

export {
  ws,
  IOProvider,
}
