import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj.js', () => {
  test('Debe de retornar un objeto con clave, nombre, edad , lat, lng y rango con valor por defecto', () => {
    const userDate = {
      key: 'Ironman',
      username: 'Tony',
      age: 45
    }

    const testUbication = usContext(userDate)

    expect(testUbication).toEqual({
      key: userDate.key,
      username: userDate.username,
      age: userDate.age,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      },
      rango: 'Leader'
    })
  })

})