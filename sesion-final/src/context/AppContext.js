/**
 * Dependencies
 */
import {
    createContext,
    useState
} from 'react';

/**
 * Context
 */
export const AppContext = createContext();

/**
 * Provider Wrapper
 */
export function AppProvider({
    children
}) {
    const [pokemons, setPokemons] = useState([]);
    
    const providerValue = {
        pokemons,
        setPokemons,
    };

    return ( <AppContext.Provider value = {
        providerValue
    } > {
        children
    } </AppContext.Provider>)
}