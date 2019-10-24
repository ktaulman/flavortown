import React from 'react';

export default function PlaceHolderNews(){
    return(
        <article className="news">
        <h2 className="news__type">Food News</h2>
        <div className="news__item">
          <h3 className="news__title">Local Man Donates Kidney Beans</h3>
                <img 
                      className="news__image"
                      src="https://media2.s-nbcnews.com/i/newscms/2018_37/1366573/guy-fieri-today-main-180910_463605ac6a5e40795b552795b5215fd0.jpg" alt='' height={100} width={175}
                  />
            <summary className="news__description"> Stricken with a never passing issue, Guy decided to step up and sit down for a talk about beans.</summary>
        
                    <p className="news__author">By Guy Fieri, Self Press LLC
                  </p>
        
          </div>
        </article>
    )
}