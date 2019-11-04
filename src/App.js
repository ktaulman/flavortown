import React,{useState} from 'react';
import './App.css';

//Containers
import Main from "./containers/Main";
import Header from './containers/Header';
import Footer from './containers/Footer';

//Components
import News from './components/News';
import SearchBar from './components/SearchBar';
import Trending from './components/Trending';
import Highest from "./components/Highest";
import BannerAd from './components/BannerAd';
import Random from './components/Random'
import { Carousel } from './components/Carousel';




export default function App (){
  const [isGuyClicked,setIsGuyClicked]=useState(false);


  function SwitchButton(){

    function handleSwitch(){
      setIsGuyClicked(!isGuyClicked);
    }

    return(
      <div className='switchButton'>
          <img src="https://myrealdomain.com/images/guy-fieri-png-1.png" width="100px" height="100px" alt='' className="switchButton__image" />
        <button className='switchButton__button' onClick={()=>handleSwitch()}>
        Guy! I need a Recipe 
        
        </button>
      </div>
  
    )
  }

  return(
    <div className="app" id='app'>

      <Header>
        <h1 className="title">FlavorTown</h1>
        <SearchBar /> 
      </Header>
      
      {isGuyClicked?
      <div>
      <BannerAd src="https://realpants.com/wp-content/uploads/2015/03/648x300xpromo-guy-fieri-savory-sausages.jpg.pagespeed.ic_.5TFvSsrJ8x.jpg" />
        <Random />
      </div> 
      
      :
      <Main>
        <News />
  
        <BannerAd src="https://realpants.com/wp-content/uploads/2015/03/648x300xpromo-guy-fieri-savory-sausages.jpg.pagespeed.ic_.5TFvSsrJ8x.jpg" />
  
       
        <Carousel/>
          <Trending /> 
          <Highest /> 
       
      </Main>
      }


    <Footer>
        <SwitchButton />
    </Footer>
    </div>
  )
}


