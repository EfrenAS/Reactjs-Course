import { describe, expect, test } from 'vitest'
import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('authReducer tests', () => {
  test('should return default state', () => {
    const state = authReducer({ logged: false }, {})

    expect(state).toEqual({ logged: false })
  })

  test('should login with an user and activate the logged', () => {
    const user = { id: '123', name: 'John Doe' }

    const action = { type: types.login, payload: user }
    const state = authReducer({ logged: false }, action)

    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  })

  test('should logout and deactivate the logged', () => {
    const action = { type: types.logout }
    const state = { logged: true, user: { id: '123', name: 'John Doe' } }

    const newState = authReducer(state, action)

    expect(newState).toEqual({ logged: false, user: { id: '123', name: 'John Doe' } })
  })
})
