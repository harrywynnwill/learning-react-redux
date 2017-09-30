import { CREATE_POST, EDIT_POST, SET_FILTER } from './action-types'
export const createPost =  (user, text) => ({ type: CREATE_POST, user, text })
export const editPost =  (id, text) => ({ type: EDIT_POST, id, text })
export const setFilter =  (filter) => ({ type: SET_FILTER, filter })