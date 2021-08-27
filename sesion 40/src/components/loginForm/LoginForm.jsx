/**
 * Dependencies
 */
import React, { useState } from "react";

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

const invalidUsers = ['', 'username', 'test'];

function LoginForm() {
  const [userName, setUsername] = useState('');
  const [userError, setUserError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setUserError(userName === 'username' || userName === '' || userName === 'test');
    setUserError(invalidUsers.includes(userName.toLowerCase()));
  };

  return (
    <div className="flex-container centered">
      <Card>
        <form className="form">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="UserName"
            name="name"
            type="text"
            value={userName}
            error={userError}
            errorMessage="usuario inválido"
          />
          <Input placeholder="password" name="password" type="password" />
          <Button
            type="button"
            onClick={handleSubmit}
          >
            login
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
