import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => {
  test('getImagen debe de retornar una url de una imagen', async() => {
    const url = await getImagen()

    expect(typeof url).toBe('string')
  })
})