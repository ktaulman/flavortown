import React from 'react';

class Trending extends React.Component{
   render(){
    let {data}=this.props;
    let recipes=data.map(recipe=>{
        return(
            <li className="trending__recipe">
                <a 
                href={recipe.source_url} 
                className="trending__link"
                >
                     {recipe.title}
                </a>
            </li>
            )
        }
    )
    
    return(
        <aside className='trending'>
            <h2 className="trending__header">Trending</h2>
            <ol className="trending__list">
                {recipes?recipes:''}
            </ol>
          </aside>
        )

    }


}


export default Trending;