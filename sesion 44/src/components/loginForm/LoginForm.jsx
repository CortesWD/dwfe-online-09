/**
 * Dependencies
 */
import React from "react";

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
//  Se usa el custom hook useInput para refactorizar el uso repetido de useState
// Igualmente, entrega una nueva manera de hacer el handleChange y el control de errores
// para los inputs.
// Las líneas comentadas hacen referencia a la implementación inicial. Debajo,
// los cambios con useInput (custom hook).
 import useInput from '../../hooks/useInput';

/**
 * Styles
 */
import "./LoginForm.css";

function LoginForm() {
  // const [name, setName] = useState('');
  const name = useInput('');
  // const [username, setUserName] = useState('');
  const username = useInput('');
  // const [password, setPassword] = useState('');
  const password = useInput('');
  const width = useWindowWidth();

  return (
    <div className="flex-container centered">
      <Card className={width < 768 ? 'bg-green' : ''}>
        <form className="form">
          <Input
            onChange={name.handleChange}
            placeholder="name"
            autoComplete="off"
            name="name"
            value={name.value}
            error={name.error}
            errorMessage="El campo no puede ser vacío"
            />
          <Input
            onChange={username.handleChange}
            placeholder="UserName"
            autoComplete="off"
            name="username"
            value={username.value}
            error={username.error}
            errorMessage="Usuario incorrecto"
            />
          <Input
            onChange={password.handleChange}
            placeholder="password"
            autoComplete="off"
            name="password"
            value={password.value}
            type="password"
            error={password.error}
            errorMessage="Contraseña incorrecto"
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
