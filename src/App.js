import React,{useState} from 'react';
import './App.css';

//Containers
import Main from "./components/Main/Main";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Components
import News from './components/News/News';
import SearchBar from './components/SearchBar/SearchBar';
import Trending from './components/Trending/Trending';
import Highest from "./components/Highest/Highest";
import BannerAd from './components/BannerAd/BannerAd';
import Random from './components/Random/Random'
import  GuyNews from './components/GuyNews/GuyNews';
import Guy from './components/guy.png'




export default function App (){
  const [isGuyClicked,setIsGuyClicked]=useState(false);


  function SwitchButton(){

    function handleSwitch(){
      setIsGuyClicked(!isGuyClicked);
    }

    return(
      <div className='switchButton'>
        <button className='switchButton__button' onClick={()=>handleSwitch()}>
        Guy! I need a Recipe 
        
        </button>
      </div>
  
    )
  }

  return(
    <div className="app" id='app'>

      <Header>
        <div className="header__flames"></div>
        <h1 className="header__title">FlavorTown</h1>
        <SearchBar /> 
        <SwitchButton />
      </Header>
      
      {isGuyClicked?
      <div>
      <Random />
      <BannerAd src="https://realpants.com/wp-content/uploads/2015/03/648x300xpromo-guy-fieri-savory-sausages.jpg.pagespeed.ic_.5TFvSsrJ8x.jpg" />
        
      </div> 
      
      :
        
        <Main>
        <div style={{margin:'30px 0px'}}>&nbsp;</div>
        <GuyNews/>
        <div style={{margin:'30px 0px'}}>&nbsp;</div>
          <News />
        
       
        <BannerAd src="https://realpants.com/wp-content/uploads/2015/03/648x300xpromo-guy-fieri-savory-sausages.jpg.pagespeed.ic_.5TFvSsrJ8x.jpg" />
  
       
      
          <Trending /> 
          <Highest /> 
       
      </Main>
      }


    <Footer>
       <h1 className='footer__title'>FLAVORTOWN </h1>
    </Footer>
    </div>
  )
}


