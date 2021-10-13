const URLbase = 'https://pokeapi.co/api/v2';

export const request = (resource) => fetch(`${URLbase}${resource}`);