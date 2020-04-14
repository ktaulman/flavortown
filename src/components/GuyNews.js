import React,{useState,useEffect} from 'react';
import Guy from './guy.png'
export default function GuyNews(){
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
   
    

    //RENDERING
    //

    //if loaded 
    if(displayData[0]){
        console.log('displayData mounted')
        function Card({title,urlToImage,description,url,author,source}){
            return(
                <div className="guyNews__card">
                <a className="guyNews__cardTitle" href={url}>{title}</a>
                        <img 
                            className="guyNews__cardImage"
                            src={urlToImage} alt='' height={100} width={175}
                        />
                        <summary className="guyNews__cardDescription">{description}</summary>
                
                            <p className="guyNews__cardAuthor">{`${author}, ${source.name}`} 
                        </p>
            </div>
            )
        }


      
     
        return(
            <>
            
            <div className="guyNews">
            <h2 className="guyNews__title">BREAKING Guy Fieri News</h2>
            <section className='guyNews__body'>
            <article className="guyNews__article">
               {displayData.map((card,index)=>{
                const {title,urlToImage,url,author,source}=card;
                return(
                    <Card
                        key={index}
                        title={title}
                        urlToImage={urlToImage?urlToImage:Guy}
                        url={url}
                        author={author}
                        source={source}
                    />
                )
            })}
            </article>

            </section>
            </div>
           
            </>
        )
    }
    //defaut return if nothing is loaded 

    return(
        <div>  Loading ... </div>
    )

}