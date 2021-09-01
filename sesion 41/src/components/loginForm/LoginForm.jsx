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
  /**
   * Este useEffect se ejecuta siempre
   */
  useEffect(() => {
    if (userName.length > 3 && !invalidUsers.includes(userName.toLowerCase())) {
      console.log('pasan todas las validaciones de username')
    } else {
      console.error('hay un error en username');
    }
  });

  useEffect(() => {
    if (password.length > 3 && !invalidPasswords.includes(password.toLowerCase()) && password.includes(".")) {
      console.log('pasan todas las validaciones de password')
    } else {
      console.error('hay un error en password');
    }
  });




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
            disabled
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
