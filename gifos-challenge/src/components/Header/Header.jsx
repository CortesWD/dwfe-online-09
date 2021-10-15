import React, { useState } from 'react';
import Button from '../Button/Button';

function Header() {
    const [isDark, setIsDark] = useState(false);
    return (
        <header>
            <img src="" alt="" className="logo"/>
            <Button
                onClick={() => setIsDark(!isDark)}
            >
                MODO
                {isDark ? " DARK" : " LIGHT"}
            </Button>
        </header>
    )
}

export default Header;
