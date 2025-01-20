import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'
import heroes from '../../src/data/heroes'

describe('08-imp-exp', () => {
  test('getHeroeById debe de retornar el heroe con el id pasado', () => {
    const getHero = 1
    const hero = getHeroeById(getHero)

    const heroTesting = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }

    expect(hero).toEqual(heroTesting)
  })

  test('getHeroesById debe de retornar undefinded si no hay heroes con el id pasado', () => {
    const getHero = 10
    const hero = getHeroeById(getHero)
    expect(hero).toBeFalsy()
  })


  test('getHeroesByOwner debe de retornar los heroes de DC', () => {

    const owner = 'DC'
    const heroesByOwner = getHeroesByOwner(owner)

    expect(heroesByOwner).toEqual(heroes.filter((hero) => hero.owner === owner))
    expect(heroesByOwner.length).toBe(3)
  })


  test('getHeroesByOwner debe de retornar un array con los herores de Marvel', () => {
    const owner = 'Marvel'
    const heroesByOwner = getHeroesByOwner(owner)

    expect(heroesByOwner).toEqual(heroes.filter((hero) => hero.owner === owner))
    expect(heroesByOwner.length).toBe(2)
  })

  test('getHeroesByOwner debe de retornar un array vacio si no hay heroes con el owner pasado', () => {
    const owner = 'AAA'
    const heroesByOwner = getHeroesByOwner(owner)

    expect(heroesByOwner).toEqual([])
  })
})
