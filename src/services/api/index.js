import { api } from 'config'
import { ApiProvider } from './provider/ApiProvider'

let client

const isFunction = cb => typeof cb === 'function'

const getInstance = (connectAction, disconnectAction) => {
  if (!client) {
  
    const commonHeaderParams = {
      "X-Mashape-Key": 'jjU3umuHAamshSS9d64I2OwBVDQBp1mq9eJjsne63JShIcTnhL',
      "Accept": 'application/json',
    }
    
    const postHeaderParams = {
      "Content-Type": 'application/x-www-form-urlencoded',
    }

    const getRandomUser = () => {
      const headers = new Header(commonHeaderParams)
      return fetch(api.url, {
        method: 'get',
        header,
      })
    }

    const postRandomUser = () => {
      const headers = new Header(Object.assign(commonHeaderParams, postHeaderParams))
      return fetch(api.url, {
        method: 'post',
        header,
      })
    }

    client = {
      getRandomUser,
      postRandomUser,
    }
  }
  return client
}

const apiService = {
  getInstance,
}

export {
  apiService,
  ApiProvider,
}
