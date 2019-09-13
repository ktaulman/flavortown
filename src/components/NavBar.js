import React from 'react';
import SignIn from './SignIn';

class NavBar extends React.Component{
    render(){
    return(
<nav className="navbar">
    <h1 className="navbar__title">FlavorTown</h1>
    <div className="navbar__linksContainer">
        <a className="navbar__link"  href='google.com' alt=''>Recipes</a>
        <SignIn />
    </div>
    
</nav>
)
    }
}
export default NavBar;