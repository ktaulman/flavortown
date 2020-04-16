import React,{useState,useEffect} from 'react';
import './FeaturedNews.css';

export default function FeaturedNews (){
  const [displayData,setDisplayData]=useState(null);

  useEffect(()=>{
    fetch('https://flavortown-api.herokuapp.com/news')
    .then(res=>res.json())
    .then(data=>{setDisplayData(data)})

  },[])
 


  if(displayData){
    console.log(displayData)
    const {title,urlToImage,description,url,author,source}=displayData;
  return(
    <article className="news">
      <h2 className="news__headline">Featured </h2>
      <div className="news__item">
        <a className="news__title" href={url}>      {title}</a>
            
          <summary className="news__description">{description}</summary>
      
                  <p className="news__author">
                  By:{author?author:null},{source.name}
                  </p>
                  <img 
                    className="news__image"
                    src={urlToImage} alt='' 
                />
        </div>
      </article>
  )}

  if(!displayData){
    return(
      <article className="news">
      <h2 className="news__type">Featured Food Article</h2>
      <div className="news__item">
        <header className="news__header">
        <a className="news__title" href='/' alt='link'>      </a>
              <img 
                    className="news__image"
                    src='' alt='' 
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