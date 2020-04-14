import React from 'react';
import './Header.css';
import {Logo} from '../logo-1.svg'
export default function Header ({children}){
    return(
        <header className="header">
            {Logo}
            {children}
        </header>
    )
}