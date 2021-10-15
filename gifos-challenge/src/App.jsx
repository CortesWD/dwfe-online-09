import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import { request } from "./utils/request";
// import { listaGifs } from './utils/mockBD';

function App() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gifsList, setGifsList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Evita un ciclo infinito
    if (value !== "") {
      console.log("@value: ", value);
    }
  }, [value]);

  useEffect(() => {
    if (isSearching && value !== "") {
      setIsLoading(true);
      request("/search", value)
      .then((res) => res.json())
      .then((data) => setGifsList(data.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsSearching(false);
        setIsLoading(false);
        setValue('');
        });
    }
  }, [isSearching, value]);

  return (
    <div className="App">
      <Header />
      <Search
        onClick={() => setIsSearching(!isSearching)}
        value={value}
        setValue={setValue}
        btnDisabled={isSearching || value === ""}
      />
      {isLoading ? <p>Cargando...</p> : <Results data={gifsList} />}
    </div>
  );
}

export default App;
