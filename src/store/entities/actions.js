import { LOAD_USER_ENTITIES, UPDATE_FILTER_ENTITY, DELETE_FILTER_ENTITY } from './constants'

const loadUserEntities = ({ users, firms, clients, accounts, sessions, mffilters, mfalgorithms }) => ({
  type: LOAD_USER_ENTITIES,
  payload: {
    users,
    firms,
    clients,
    accounts,
    sessions,
    mffilters,
    mfalgorithms,
  },
})

const updateFilterEntity = filter => ({
  type: UPDATE_FILTER_ENTITY,
  payload: {
    filter,
  },
})

const deleteFilterEntity = id => ({
  type: DELETE_FILTER_ENTITY,
  payload: {
    id,
  },
})

export const entitiesActions = {
  loadUserEntities,
  updateFilterEntity,
  deleteFilterEntity,
}
