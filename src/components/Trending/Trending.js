import React,{useState,useEffect} from 'react';



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
   

    //METHODS
      const renderList=displayData.map((recipe,i)=>{
        return(
          <li key={'li+'+recipe.id}>
              <a className='list__link' href={recipe.sourceUrl} target='_blank' rel='noopener noreferrer' alt={'hyperlink to'+recipe.title}>{recipe.title}</a>
           </li>
          )
        })
      
     return( 
        <aside className='list'>
        <h2 className="list__header">Trending Recipes</h2>
        <ol className="list__list">
            {renderList}
        </ol>
      </aside>
     )
}