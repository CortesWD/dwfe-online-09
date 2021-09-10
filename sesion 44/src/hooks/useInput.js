import { useState } from 'react';

// VALIDACIONES: 1. Ningún campo esté vacío

const invalidUsers = ['username', 'test'];
const invalidPasswords = ["password", "test", "1234"];

function useInput(value) {
    const [input, setInput] = useState(value);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { target: { name, value }} = e;
        // Recordar que trim() suprime los espacios 
        const isEmpty = value.trim() === "";
        const isInvalidUser = name === 'username' && invalidUsers.includes(value.toLowerCase());
        const isInvalidPassword = name === 'password' && invalidPasswords.includes(value.toLowerCase());
        setError(isEmpty || isInvalidUser || isInvalidPassword);
        setInput(value);     
    };
    return {value: input, handleChange, error}
}

export default useInput;

