import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'

describe('Test in 07-deses-arr.js', () => {
  test('Debe de retornar un arreglo de un string y un número', () => {
    const [string, number] = retornaArreglo()

    expect(typeof string).toBe('string')
    expect(typeof number).toBe('number')

    expect(string).toEqual(expect.any(String))
    expect(number).toEqual(expect.any(Number))
  })
})