import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <form className="searchbar__form">
            <label className="searchbar__label" htmlFor='search'>Search Flamin' Recipes:</label>
            <div className="searchbar">
            <input id='search'className="searchbar__input" placeholder='search...'></input>
            
            <button className="searchbar__button" type="submit" htmlFor='search'><i className="searchbar__icon md-dark">search</i>
            </button>
            </div>
        </form>
        )
    }
}

export default SearchBar;