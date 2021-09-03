/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';

/**
* Components
*/
import Person from './components/person/Person';
import Button from './components/button/Button';

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
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show && !persons.length) {
      request('/users')
        .then((res) => {
          if (res.status === 200) return res.json();
          if (res.status >= 400) throw new Error('error del primer then');
        })
        .then((data) => { setPersons(data); })
        .catch((err) => {
          setPersons([]);
          console.error(err);
        });
    }
  }, [show, persons.length]);

  return (
    <div className="App">
      <div className="personas">
        <h1>Personas</h1>
        <Button
          onClick={() => setShow(!show)}
        >
          Traer usuarios
        </Button>
        {!persons.length && <p>No hay datos</p>}
        {show ? (
          persons || []).map((person) => {
            const {
              name = '',
              company = {},
              website = '',
              id = ''
            } = person || {};

            const {
              name: companyName = '',
              catchPhrase = ''
            } = company;

            return (
              <Person
                key={id}
                nombre={name}
                company={companyName}
                catchPhrase={catchPhrase}
                website={website}
              />
            )
          }
          ) : null}
      </div>
    </div>
  );
}

export default App;
