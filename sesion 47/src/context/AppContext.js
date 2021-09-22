/**
 * Dependencies
 */
import { createContext, useState } from 'react';

/**
 * Context
 */
export const AppContext = createContext();

/**
 * Provider Wrapper
 */
export function AppProvider({children}) {
  const [store, setStore] = useState({
    user: '',
    password: '',
  });

  const providerValue = {store, setStore};

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  )
}