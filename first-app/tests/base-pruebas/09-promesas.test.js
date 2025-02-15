import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

describe('Pruebas en 09-promesas.js', () => {
  test('getHeroeByIdAsync debe de retornar el heroe con el id pasado', (done) => {
    const heroID = 1
    
    getHeroeByIdAsync(heroID).then(hero => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      })
      done()
    })
  })

  test('getHeroeByIdAsync debe de retornar un error si el heroe con el ID no existe', (done) => {
    const id = 100

    getHeroeByIdAsync(id).catch(error => {
      expect(error).toBe('No se pudo encontrar el héroe')

      done()
    })
  })
})