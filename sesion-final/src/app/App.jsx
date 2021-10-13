/**
 * Dependencies
 */
import React from 'react';
import { AppProvider } from '../context/AppContext';
import {BrowserRouter} from 'react-router-dom';

/**
 * Components
 */
import Pages from '../pages/Pages';

/**
 * Styles
 */
import './App.scss';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      
    </AppProvider>

  );
}

export default App;
