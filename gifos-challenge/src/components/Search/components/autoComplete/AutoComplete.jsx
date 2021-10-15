import React from 'react';

import './AutoComplete.css';

function AutoComplete({
  suggestions,
  setValue,
  isVisible,
  setSuggestions,
  submitSearch
}) {

  const handleClick = (value) => {
    // 1. completamos el value del input con la seleccion del
    // autocomplete
    setValue(value);
    // 2. limpiamos la lista de sugerencias para ocultarla
    setSuggestions([]);
    // 3. (nice to have) hacemos petición a giphy con los vals
    // actualizados
    submitSearch();
  }

  return isVisible ? (
    <div id="autocomplete" className="autocomplete-container">
      {suggestions.map((item, i) => {
        return (
          <button
            key={`auto_${item.name}-${i}`}
            className="autocomplete-option"
            onClick={() => handleClick(item.name)}
            type="button"
          >
            {item.name}
          </button>
        )
      })} 
    </div>
  ) : null
}

export default AutoComplete;