import React,{useState,useEffect} from 'react';
import Guy from '../guy.png'
export default function Random () {
    //STATE
    const [displayData,setDisplayData]=useState(null);
    

    //EFFECTS 
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_ADDRESS+'/random')
        .then(res=>res.json()).then(data=>setDisplayData(data))
        }
        ,[])

    //RENDERING

    
    //WHEN NOT LOADED 
   

    //LOADED 
    if(displayData){
        const {extendedIngredients, image, instructions, title,sourceUrl}=displayData;


    //RESPONSE RENDERING
        const renderInstructions= instructions.replace('instructions','').split('.').slice(0,-1).map(el=>
            <li className="instructions__item">{el?el.replace(/<[^>]*>?/gm, ''):null}</li>
        )

        const renderIngredients= extendedIngredients.map(ingredient=>
            <li className='ingredients__item'>
                {ingredient.originalString}
            </li>
        );
        

    return(
        <div className="random" >
           <a className="random__recipe" href={sourceUrl} >{title}</a>
            <img src={image?image:Guy} alt='' className="random__image"/>
            <section className="ingredients">
                <h2 className="ingredients__title">Ingredients</h2>
                    <ul className="ingredients__list">
                        {renderIngredients}
                    </ul>
            </section>
            <section className="instructions">
                <h2 className="instructions__title">Instructions</h2>
                <ul>{renderInstructions}</ul>
            </section>
          
        </div>
        )
    
    }
    return(
        <h1 style={{fontSize:'36px'}}>Loading...</h1>
    )
}