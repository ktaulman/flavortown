import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './SearchBar.css'

export default function SearchBar() {
    //STATES 
    const [searchInput,setSearchInput]=useState(null)
    const [resultData,setResultData]=useState([])
    console.log('searchInput=',searchInput)
    //HANDLERS
    function handleInput(e){
        console.log(e.target.value)
        setSearchInput(e.target.value)
        if(e.target.value===''||null){
            setResultData([])
        }
    }

    function handleClick(id){
      axios.post('https://flavortown-api.herokuapp.com/trending/handleclick',{id}).then(data=>window.open(data.data.sourceUrl,"_blank")).catch(console.error)
    }

    function handleBlur(){
        setTimeout(()=>{setResultData([])},200)
    }
    function handleBackAgainClick(){
        const search=document.querySelector('#search');
        console.log(search.value)
    }

    //USE EFFECT 
    useEffect(()=>{

        if(searchInput===null||'') return;
        axios.post('https://flavortown-api.herokuapp.com/searchbar',{input:searchInput})
        .then(data=>{
            console.log(data)

            setResultData(data.data)})
        .catch(console.error)
    },[searchInput])



    //MAPPING RENDER
    const renderList=resultData.map(result=>
        {return(
            <li className="searchbar__resultItem" key={result.id} onClick={()=>handleClick(result.id)}>
            {result.title}</li>)}
        );
    //RENDERING
    return(
    
        <form className="searchbar" autoComplete="off" 
            onBlur={()=>handleBlur()} 
            onClick={()=>handleBackAgainClick()}
            >
            <div className="searchbar__form">
                <input id='search'
                className="searchbar__input" placeholder='search flamin 
                recipes...'
                onChange={handleInput}></input>

            </div>
            <ul className="searchbar__resultList" id="searchbar__results">
                {renderList}
            </ul>
        </form>

       
  
    )
}
