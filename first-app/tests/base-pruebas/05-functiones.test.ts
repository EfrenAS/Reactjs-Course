import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones.js", () => {
  test("getUser debe de retornar un objeto con uid, username", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(testUser);
  });

  test("getUsuarioActivo debe de retornar un objeto con uid y el nombre pasado como parametro", () => {
    const name = "Efrén";

    const user = getUsuarioActivo(name);

    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });

    console.log(user);
  });
});
