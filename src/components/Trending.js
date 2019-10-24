import React,{useState,useEffect} from 'react';
import axios from 'axios';


export default function Trending (){
    //STATE
    const [displayData,setDisplayData]=useState([]);

    //EFFECTS 
    useEffect(()=>{
        fetch('http://localhost:3000/trending')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setDisplayData(data)
        })
      },[])
    //HANDLERS 
      function handleClick(id){
          console.log("handleClick",id)
        axios.post('http://localhost:3000/trending/handleclick',{id}).then(data=>window.open(data.data.sourceUrl,"_blank"))
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
        <h2 className="list__header">Trending</h2>
        <ul className="list__list">
            {renderList}
        </ul>
      </aside>
     )
}