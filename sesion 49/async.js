const app = document.getElementById('root');

/**
 * @param {String} term - string term to query
 * @returns {Promise} fetch Promise
 */
function request(term) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=ErT4SajFmJKTRMjhTi1xTIYDMEm4DJED&q=${term}&limit=5`);
};

async function renderGifs() {
  const response = await request('cat');
  const json = await response.json();
  const { data } = json;
  const { status } = response;

  /**
   *  Siempre validar que el status de la respuesta es 200
   * en caso de tener error en el endpoint, poderlo manejar
   */
  if (status === 200) {
    data.forEach(gif => {
      const element = document.createElement('img');
      element.src = gif.images.fixed_height.url;
      app.appendChild(element);
    });
  } else {
    app.innerText = 'ocurrio un error al traer gifs';
  }
}

renderGifs();