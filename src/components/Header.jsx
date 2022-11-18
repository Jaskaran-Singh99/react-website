import React from 'react'
// import{Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import '../style/header.scss'
const Header = ()=>{
    return(
        <nav>
            <h1>Jk_developer</h1>
            <main>
                <HashLink to='/#home'>Home</HashLink>
                <HashLink to='/contact'>Contact </HashLink>
                <HashLink to='/#about'>About</HashLink>
                <HashLink to='/#follow'>Follow</HashLink>
    
            </main>
        </nav>
    )
}

export default Header