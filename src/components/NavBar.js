import React from 'react';

class NavBar extends React.Component{
    render(){
    return(
        <nav className="navbar">
    <h1 className="navbar__title">FlavorTown</h1>
    <div className="navbar__linksContainer">
        <a className="navbar__link" href='google.com' alt=''>Favorites</a>
        <a className="navbar__link"  href='google.com' alt=''>Wishlist</a>
        <a className="navbar__link"  href='google.com' alt=''>Recipes</a>
    </div>
</nav>
)
    }
}
export default NavBar;