import React,{useState,useEffect} from 'react';

export default function Random () {
    //STATE
    const [displayData,setDisplayData]=useState(null);
    

    //EFFECTS 
    useEffect(()=>{
        fetch('https://desolate-tor-39614.herokuapp.com/random')
        .then(res=>res.json()).then(data=>setDisplayData(data))
        }
        ,[])

    //RENDERING

    
    //WHEN NOT LOADED 
    if(!displayData){
        return(
        <div>Loading..</div>
        )
    }

    //LOADED 
    if(displayData){
        console.log(displayData)
        const {extendedIngredients, image, instructions, title,sourceUrl}=displayData;


    //RESPONSE RENDERING
        const renderInstructions= instructions.replace('instructions','').split('.').slice(0,-1).map(el=>
            <li className="instructions__item">{el}</li>
        )

        const renderIngredients= extendedIngredients.map(ingredient=>
            <li className='ingredients__item'>
                <h3>{ingredient.originalString}</h3>
            </li>
        );
        

    return(
        <div className="random" >
           <a className="random__recipe" href={sourceUrl} >{title}</a>
            <img src={image} alt='' className="random__image"/>
            <section className="ingredients">
                <h2 className="random__title">Ingredients</h2>
                    <ul className="ingredients__list">
                        {renderIngredients}
                    </ul>
            </section>
            <section className="instructions">
                <h2 className="random__title">Instructions</h2>
                <ul>{renderInstructions}</ul>
            </section>
          
        </div>
        )
    
    }
}