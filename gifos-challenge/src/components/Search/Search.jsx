import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { request } from "../../utils/request";
import "./Search.css";
import AutoComplete from './components/autoComplete/AutoComplete';

function Search({ onClick, value, setValue, btnDisabled }) {
  const [autocomplete, setAutocomplete] = useState([]);

  useEffect(() => {
    if (value.length >= 3 ) {
      request("/search/tags", value, 5)
        .then((res) => res.json())
        .then((data) => setAutocomplete(data.data))
        .catch((err) => console.log(err));
    }
  }, [value]);
  
  useEffect(() => {
    const removeAutoComplete = (e) => {
      if (!e.target || e.target.id !== 'autocomplete') {
        setAutocomplete([]);
      }
    }

    document.body.addEventListener('click', removeAutoComplete);

    return () => {
      document.body.removeEventListener('click', removeAutoComplete);
    }
  }, []);

  return (
    <section>
      <form>
        <div className="form-control">
          <input
            list="browsers"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <AutoComplete
            isVisible={autocomplete.length && value.length >= 3}
            suggestions={autocomplete}
            setSuggestions={setAutocomplete}
            setValue={setValue}
            submitSearch={onClick}
          />
        </div>
        <Button onClick={onClick} className="btn-search" disabled={btnDisabled}>
          BUSCAR
        </Button>
      </form>
    </section>
  );
}

export default Search;
