import { initialState, getAllQuotes } from './selectors'
import { ADD_QUOTE, REMOVE_QUOTE, LOAD_QUOTE } from './constants'
import { Quote } from '../../models/index';

export default (state = initialState, { type, payload }) => {
  let newState = Object.assign({}, state)
  let quote;

  switch (type) {
    case LOAD_QUOTE:
      quote = new Quote(payload.quote, payload.author, payload.category)
      newState.lastQuoteLoaded = quote
      break

    case ADD_QUOTE:
      const quoteList = getAllQuotes(newState)
      quote = new Quote(payload.quote, payload.author, payload.category)
      quote._id = quoteList.length;
      newState.currentList = newState.currentList.concat([quote])
      break

    case REMOVE_QUOTE:
      newState.currentList = newState.currentList.slice(payload, 1)
      break

    default:
      break
  }
  return newState
}
