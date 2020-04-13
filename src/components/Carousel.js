import React,{useState,useEffect} from 'react';

export function Carousel(){
    //STATE 
    const [displayData,setDisplayData]=useState([]);
    const [carouselPosition,setCarouselPosition]=useState(0);

    //GET API 
    useEffect(()=>{
        fetch('https://flavortown-api.herokuapp.com/carousel')
        .then(res=>res.json())
        .then(data=>setDisplayData(data))
    },[])

    //Rendering for Carousel
    const renderCarousel=displayData.filter((el,i)=>
        i===carouselPosition
    )[0]
    
   //HANDLERS
    function handleBack(){
        if(carouselPosition===0){
            setCarouselPosition(displayData.length-1)
        }
        else{
            setCarouselPosition(carouselPosition-1)
        }
    }
    function handleForward(){
        if(carouselPosition===displayData.length){
            setCarouselPosition(0)
        }else{
            setCarouselPosition(carouselPosition+1)
        }
    }

    if(displayData[0]){

        const {title,urlToImage,description,url,author,source}=renderCarousel;
        return(
            <div className="guyNews">
            <button className="guyNews__button" onClick={()=>handleBack()}> {"<"} </button>
            <article className="guyNews__article">

            <h2 className="guyNews__type">Guy Fieri News</h2>
            
            <div className="guyNews__item">
              <a className="guyNews__title" href={url}>      {title}</a>
                    <img 
                          className="guyNews__image"
                          src={urlToImage} alt='' height={100} width={175}
                      />
                    <summary className="news__description">{description}</summary>
            
                        <p className="news__author">{`By:${author}, ${source.name}`} 
                      </p>
            
            </div>

            </article>

            <button className="guyNews__button" onClick={()=>handleForward()}  > {">"} </button>
            </div>
        )
    }else{
        return(
        <div>  Loading ... </div>)
    }

}