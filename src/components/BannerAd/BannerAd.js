import React from 'react';

export default function BannerAd(props){
    return(
    <div className="bannerad">
        <img className="bannerad__image"
        src={props.src} alt="bannerad"/>
    </div>
    )
}