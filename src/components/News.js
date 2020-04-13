import React,{useState,useEffect} from 'react';

export default function News (){
  const [displayData,setDisplayData]=useState(null);

  useEffect(()=>{
    fetch('https://flavortown-api.herokuapp.com/news')
    .then(res=>res.json())
    .then(data=>{setDisplayData(data)})

  },[])
 


  if(displayData){
    const {title,urlToImage,description,url,author,source}=displayData;
  return(
    <article className="news">
      <h2 className="news__type">Food News</h2>
      <div className="news__item">
        <a className="news__title" href={url}>      {title}</a>
              <img 
                    className="news__image"
                    src={urlToImage} alt='' height={100} width={175}
                />
          <summary className="news__description">{description}</summary>
      
                  <p className="news__author">{`By:${author}, ${source.name}`} 
                </p>
      
        </div>
      </article>
  )}

  if(!displayData){
    return(
      <article className="news">
      <h2 className="news__type">Food News</h2>
      <div className="news__item">
        <header className="news__header">
        <a className="news__title" href='/' alt='link'>      </a>
              <img 
                    className="news__image"
                    src='' alt='' height={100} width={175}
                />
          <summary className="news__description">Loading...</summary>
        </header>
        <footer>
                  <p className="news__author">
                </p>
         </footer>
        </div>
      </article>
    )
  }
}