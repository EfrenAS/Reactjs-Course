import { types } from '../types/types'

export const authReducer = (state = {}, action) => {
  if (action.type === types.login) {
    return {
      ...state,
      logged: true,
      user: action.payload
    }
  }

  if (action.type === types.logout) {
    return {
      ...state,
      logged: false
    }
  }

  return state
}
