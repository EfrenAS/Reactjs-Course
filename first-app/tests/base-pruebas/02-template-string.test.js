import getSaludo from '../../src/base-pruebas/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe de retornar "Hola Efrén"', () => {
    const name = 'Efrén'
    const message = getSaludo(name)

    expect(message).toBe('Hola Efrén')
  })
})