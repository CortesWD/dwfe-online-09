const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("resuelta 1");
    } else {
      reject("error 1");
    }
  }, 2000);
});

const prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("resuelta 2");
    } else {
      reject("error 2");
    }
  }, 4000);
});

const prom3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (false) {
      resolve("resuelta 3");
    } else {
      reject("error 3");
    }
  }, 3000);
});


/**
 * Promise.all va a responder un array OK con todas las promesas
 * si solo 1 falla, el estado de Promise.all es reject
 * y muestra error
 */
Promise.all([prom1, prom2, prom3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/**
 * Promise.race va a responder con la primera promesa que responda Ok o Error
 */
Promise.race([prom1, prom2, prom3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

