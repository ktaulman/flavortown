import React,{useState,useEffect } from 'react';

export default function Highest(){
    //STATE 
    const [displayData,setDisplayData]=useState([]);

    //EFFECTS 
    useEffect(()=>{
      fetch(process.env.REACT_APP_API_ADDRESS+'/highest')
        .then(res=>res.json())
        .then(data=>{
          setDisplayData(data)
        })
    },[])

    //HANDLERS 

  //METHODS
    const renderHighest=displayData.map(recipe=>
      <li key={'li_'+recipe.id}>
          <a className='list__link' href={recipe.sourceUrl} target='_blank' rel='noopener noreferrer' alt={'hyperlink to'+recipe.title}>{recipe.title}</a>
          </li>
      )
    

    //RENDERING 
    return(
        <aside className="list">
          <h2 className="list__header">
             Highest-Rated Recipes
          </h2>
          <ol className="list__list">
                {renderHighest}
            </ol>
        </aside>
        )
    }

