/**
 * Dependencies
 */
import React from 'react';
import { AppProvider } from '../context/AppContext';

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
      <Pages />
    </AppProvider>

  );
}

export default App;
