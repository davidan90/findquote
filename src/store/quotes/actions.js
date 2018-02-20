import { LOAD_QUOTE, ADD_QUOTE, REMOVE_QUOTE } from './constants'

const loadQuote = ({ quote, author, category }) => ({
  type: LOAD_QUOTE,
  payload: {
    quote,
    author,
    category
  },
})

const addQuote = ({ quote, author, category }) => ({
  type: ADD_QUOTE,
  payload: {
    quote,
    author,
    category
  },
})

const removeQuote = id => ({
  type: REMOVE_QUOTE,
  payload: {
    id,
  },
})

export const quotesActions = {
  loadQuote,
  addQuote,
  removeQuote,
}
