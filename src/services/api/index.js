import { api } from 'config'
import { ApiProvider } from './provider/ApiProvider'

let client

const isFunction = cb => typeof cb === 'function'

const getInstance = (connectAction, disconnectAction) => {
  if (!client) {

    const commonHeaderParams = {
      "X-Mashape-Key": 'CbwqlFWW4fmshY3PtiLFrCBkI7qqp1MaCNyjsnIt1xcN1JLrwC',
      "Accept": 'application/json',
    }

    const postHeaderParams = {
      "Content-Type": 'application/x-www-form-urlencoded',
    }

    const getRandomQuote = () => {
      const headers = new Headers(commonHeaderParams)
      return fetch(api.url, {
        method: 'get',
        headers,
      }).then(response => {
        return response.json()
      })
    }

    const postRandomQuote = () => {
      const headers = new Headers(Object.assign(commonHeaderParams, postHeaderParams))
      return fetch(api.url, {
        method: 'post',
        headers,
      }).then(response => {
        return response.json()
      })
    }

    client = {
      getRandomQuote,
      postRandomQuote,
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
