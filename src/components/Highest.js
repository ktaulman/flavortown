import React from 'react';

class Highest extends React.Component{
    render(){
        let {data}=this.props;
        let recipes=data.map(recipe=>{
            return(
                <li className="highest__recipe">
                    <a 
                    href={recipe.source_url} 
                    className="highest__link"
                    >
                         {recipe.title}
                    </a>
                </li>
                )
            }
        )
        return(
            <aside className="highestRated">
          <h2 className="highestRated__header">
             Highest-Rated
          </h2>
          <ol className="highest__list">
                {recipes?recipes:''}
            </ol>
        </aside>
        )
    }




}

export default Highest;