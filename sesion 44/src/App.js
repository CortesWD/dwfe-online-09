/**
 * Dependencies
 */
import React from "react";

/**
 * Components
 */
import LoginForm from "./components/loginForm/LoginForm";
import Card from './components/card/Card';

/**
* Styles
*/
import "./index.css";

export default function App() {
  return (
    <div className="App centered column">
      <LoginForm />
    </div>
  );
}
