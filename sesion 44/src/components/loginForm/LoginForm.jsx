/**
 * Dependencies
 */
import React, { useState } from "react";

/**
 * Components
 */
import Card from "./../card/Card";
import Input from "./../input/Input";
import Button from "../button/Button";

/**
 * Hooks
 */
 import useWindowWidth from '../../hooks/useWindowWidth';

/**
 * Styles
 */
import "./LoginForm.css";

function LoginForm() {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const width = useWindowWidth();

  return (
    <div className="flex-container centered">
      <Card className={width < 768 ? 'bg-green' : ''}>
        <form className="form">
          <Input
            onChange={e => setName(e.target.value)}
            placeholder="name"
            autoComplete="off"
            name="name"
            value={name}
          />
          <Input
            onChange={e => setUserName(e.target.value)}
            placeholder="UserName"
            autoComplete="off"
            name="username"
            value={username}
          />
          <Input
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
            autoComplete="off"
            name="password"
            value={password}
            type="password"
          />
          <Button
            disabled
            type="button"
          >
            Crear Cuenta
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
