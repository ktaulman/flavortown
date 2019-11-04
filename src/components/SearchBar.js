import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function SearchBar() {
    //STATES 
    const [searchInput,setSearchInput]=useState(null)
    const [resultData,setResultData]=useState([])

    //HANDLERS
    function handleInput(e){
        setSearchInput(e.target.value)
      
        if(e.target.value===''){
            setResultData([])
        }
    }

    function handleClick(id){
      axios.post('http://localhost:3000/trending/handleclick',{id}).then(data=>window.open(data.data.sourceUrl,"_blank"))
    }

    function handleBlur(){
        setTimeout(()=>{setResultData([])},200)
    }


    //USE EFFECT 
    useEffect(()=>{
        if(searchInput===null) return;
        axios.post('https://desolate-tor-39614.herokuapp.com/searchbar',{input:searchInput})
        .then(data=>setResultData(data.data))
    },[searchInput])



    //MAPPING RENDER
    const renderList=resultData.map(result=>
            <li className="searchbar__resultItem" key={result.id} onClick={()=>handleClick(result.id)}>
            {result.title}</li>
        );
    //RENDERING
    return(
    
        <form className="searchbar" autoComplete="off" onBlur={()=>handleBlur()} >
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
