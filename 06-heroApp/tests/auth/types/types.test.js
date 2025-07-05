import { describe, expect, test } from 'vitest'
import { types } from '../../../src/auth/types/types'

describe('types tests', () => {
  test('should return the types values', () => {
    expect(types).toEqual({
      login: '[auth] Login',
      logout: '[auth] Logout'
    })
  })
})
