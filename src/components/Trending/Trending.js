import React,{useState,useEffect} from 'react';
import axios from 'axios';


export default function Trending (){
    //STATE
    const [displayData,setDisplayData]=useState([]);

    //EFFECTS 
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_ADDRESS+'/trending')
        .then(res=>res.json())
        .then(data=>{
            setDisplayData(data)
        })
      },[])
    //HANDLERS 
      function handleClick(id){
        axios.post(process.env.REACT_APP_API_ADDRESS+'/trending/handleclick',{id}).then(data=>window.open(data.data.sourceUrl,"_blank"))
      }

    //METHODS
      const renderList=displayData.map((recipe,i)=>{
        if(i<5){
          return <li className="list__link" onClick={()=>handleClick(recipe.id)} key={`trending-${recipe.id}`}>
              {recipe.title}
              </li>
            }
        })
      
     return( 
        <aside className='list'>
        <h2 className="list__header">Trending Recipes</h2>
        <ul className="list__list">
            {renderList}
        </ul>
      </aside>
     )
}