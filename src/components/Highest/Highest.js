import React,{useState,useEffect } from 'react';
import axios from 'axios';

export default function Highest(){
    //STATE 
    const [displayData,setDisplayData]=useState([]);

    //EFFECTS 
    useEffect(()=>{
        fetch('https://flavortown-api.herokuapp.com/highest')
        .then(res=>res.json())
        .then(data=>setDisplayData(data))
    },[])

    //HANDLERS 
    function handleClick(id){
        console.log("handleClick",id)
      axios.post('https://flavortown-api.herokuapp.com/trending/handleclick',{id}).then(data=>window.open(data.data.sourceUrl,"_blank"))
    }

  //METHODS
    const renderHighest=displayData.map(recipe=>
      <li className="list__link" onClick={()=>handleClick(recipe.id)} key={`highest-${recipe.id}`}>
          {recipe.title}
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
