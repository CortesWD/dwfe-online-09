import { URL_BASE } from './js/utils/constants.js';
// constructor de promesas
const promesa = new Promise(function (rs, rj) {

  console.log("pendiente");

  setTimeout(() => {
    if (true) {
      rs("resuelta");
    } else {
      rj("error");
    }
  }, 2000);
});

//Ejecucion
promesa
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// fetch API retorna una promesa
// la definimos y luego la manipulamos
const baseRequest = (resource) => fetch(`${URL_BASE}${resource}`);
const getPosts = (params) => baseRequest(`/posts?${params}`);

// Hacemos el response & Error handler
baseRequest('/users')
  .then((res) => {
    // Primero serlializamos
    // fetch api nos provee de métodos [como json()] para serializar la respuesta
    // algo legible para JS que nos permite presentar los datos obtenidos en la app
    return res.json();
  })
  .then((data) => {
    // Luego la manipulamos
    console.warn(data);
  })
  .catch((error) => {
    // hacemos siempre catch por si algo falla.
    console.error(error);
  });

getPosts('userId=2')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.warn(data);
  })
  .catch((error) => {
    console.error(error);
  });

// parametrizamos para traer usuarios por ID
const getUserPosts = (limit, id) => {
  return new Promise(function (resolve, reject) {
    // manejamos que no se pueda pasar como parametro
    // un numero diferente al permitido
    if (id <= limit && id > 0) {
      // Resolvemos con la promesa de fetch para mantener
      // la estructura inicial
      resolve(getPosts(`userId=${id}`));
    } else {
      reject("user ID not allowed");
    }
  });
}

getUserPosts(3, 2333)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(`
        ${item.id}
        ${item.title}
        ${item.body}
      `);
    });
  })
  .catch((err) => console.error(err));