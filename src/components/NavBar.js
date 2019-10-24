import React from 'react';

class NavBar extends React.Component{
    render(){
    return(
        <nav className="navbar">
   
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