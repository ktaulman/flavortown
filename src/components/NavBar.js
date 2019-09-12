import React from 'react';

class NavBar extends React.Component{
    render(){
    return(
        <nav className="navbar">
    <h1 className="navbar__website__title">FlavorTown</h1>

    <a className="navbar__link" href='google.com' alt=''>Favorites</a>
    <a className="navbar__link"  href='google.com' alt=''>Wishlist</a>
    <a className="navbar__link"  href='google.com' alt=''>Recipes</a>
</nav>
)
    }
}
export default NavBar;