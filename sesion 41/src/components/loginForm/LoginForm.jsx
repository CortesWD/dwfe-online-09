/**
 * Dependencies
 */
import React, { useState, useEffect } from "react";

/**
 * Components
 */
import Card from "../card/Card";
import Input from "../input/Input";
import Button from "../button/Button";

/**
 * Styles
 */
import "./LoginForm.css";

const invalidUsers = ['username', 'test'];
const invalidPasswords = ["password", "test", "1234"];

function LoginForm() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    /**
     * Este useEffect se ejecutará siempre que se renderice
     * por primera vez el componente
     */
    console.log('ejecución al montarse o primer render');

    /**
     * Este return en el useEffect nos permite hacer clean Up
     * solo se ejecuta cuando el componente se destruye
     */
    return function () {
      console.log('ejecución al destruir el componente');
    }
  }, []);

  /**
   * Este useEffect se ejecuta siempre que cambie
   * userName o password
   */
  useEffect(() => {
    if (userName !== '' || password !== '') {
    const validUser = userName.length > 3 && !invalidUsers.includes(userName.toLowerCase());
    const validPass = password.length > 3 && !invalidPasswords.includes(password.toLowerCase())&& password.includes(".");

    setDisabled(!(validPass && validUser));
    }

  }, [userName, password]);


  return (
    <div className="flex-container centered">
      <Card>
        <div className="regla">Condiciones de registro:</div>
        <div className="regla">
          El username y password deben tener más de 3 letras.
        </div>
        <div className="regla">
          Los valores para ambos casos no deben ser "username" y "password"
          respectivamente.
        </div>
        <form className="form">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="UserName"
            name="name"
            type="text"
            value={userName}
            errorMessage="usuario inválido"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            name="password"
            type="password"
            value={password}
          />
          <Button
            disabled={disabled}
            type="button"
          >
            Crear cuenta
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
