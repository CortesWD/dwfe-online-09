/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';

/**
* Components
*/
import Person from './components/person/Person';

/**
* Styles 
*/
import './App.css';

/**
* Others
*/
import { request } from './utils/requests';

function App() {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    request('/users')
      .then((res) => {
        if (res.status === 200) return res.json();
        if (res.status >= 400) throw new Error('error del primer then');
      })
      .then((data) => {
        setPersons(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setPersons([]);
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <div className="personas">
        <h1>Personas</h1>
        {!persons.length && <p>No hay datos</p>}
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          (persons || []).map((person) => {
            const {
              name = '',
              company = {},
              website = '',
              id = '',
              email = '',
              address = {}
            } = person || {};

            const {
              city
            } = address;

            const {
              name: companyName = '',
              catchPhrase = ''
            } = company;

            return (
              <Person
                key={id}
                nombre={name}
                company={companyName}
                email={email}
                city={city}
                catchPhrase={catchPhrase}
                website={website}
              />
            )
          })
        )}
      </div>
    </div>
  );
}

export default App;
