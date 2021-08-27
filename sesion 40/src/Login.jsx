/**
 * Dependencies
 */
import React, { useState } from "react";

const fakeUser = {
  username: "focault235",
  password: "example123"
};

function Login() {
  return (
    <div className="App centered column">
      <LoginCard />
    </div>
  );
}

function LoginCard() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleInput = (e) => {
    setLoginError(false);
    setUsernameInput(e.target.value);
  };

  const handleInputPass = (e) => {
    setLoginError(false);
    setPassInput(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const { username, password } = fakeUser;
      // Usamos la sentencia para hacer el set del boolean
      // nos ayuda a escribir código legible y compacto
      setLoginSuccess(username === usernameInput && password === passInput);
      setLoginError(username !== usernameInput || password !== passInput);
      setIsLoading(false);
    }, 2000);
  };

  const logout = () => {
    // Acá debes escribir los pasos necesarios para poder
    //realizar el logout de la cuenta.
  };

  return (
    <div className="flex-container centered">
      <h2>Login Form</h2>
      <div className="card ">
        <form className="form">
          <div className="inputContainer">
            <input
              autoComplete="off"
              onChange={handleInput}
              className={loginError ? "error-input" : ""}
              placeholder="username"
              name="username"
              type="text"
              value={usernameInput}
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="password"
              className={loginError ? "error-input" : ""}
              name="password"
              type="password"
              onChange={handleInputPass}
              value={passInput}
            />
          </div>
          {!loginSuccess ? (
            <button className="btn" onClick={login}>
              {isLoading ? "Cargando..." : "Login"}
            </button>
          ) : (
            <button className="btn" onClick={logout}>
              Cerrar sesión
            </button>
          )}
          {loginError && (
            <span className="error-message">
              Alguno de los datos ingresados es incorrecto.
            </span>
          )}
          {loginSuccess && (
            <span className="success-message">Login Exitoso!</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
