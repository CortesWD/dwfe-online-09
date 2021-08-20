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

// //Ejecucion
// promesa
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch API retorna una promesa
// la definimos y luego la manipulamos
const baseRequest =  (resource) => fetch(`${URL_BASE}${resource}`);

// Hacemos el response & Error handler
// fetch api nos provee de métodos [como json()] para serializar la respuesta
// algo legible para JS que nos permite presentar los datos obtenidos en la app
baseRequest('/users')
  .then((res)=> {
    // Primero serlializamos
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