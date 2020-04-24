import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './SearchBar.css'

export default function SearchBar() {
    //STATES 
    const [searchInput,setSearchInput]=useState(null)
    const [resultData,setResultData]=useState([])
    //HANDLERS
    function handleInput(e){
        console.log(e.target.value)
        setSearchInput(e.target.value)
        if(e.target.value===''||null){
            setResultData([])
        }
    }

    function handleBlur(){
        setTimeout(()=>{
            setSearchInput('')
            setResultData([])
            }
        ,200)
    }
    

    //USE EFFECT 
    useEffect(()=>{
        if(searchInput===null||'') return;
        axios.post(process.env.REACT_APP_API_ADDRESS+'/searchbar',{input:searchInput})
        .then(data=>{
            setResultData(data.data)})
        .catch(console.error)
    },[searchInput])



    //MAPPING RENDER
    const renderList=resultData.map(result=>
        {return(
            <li className="searchbar__resultItem" key={result.id}>
            <a className="searchbar__resultItem" href={result.sourceUrl} target='_blank' rel='noopener noreferrer' alt={'link to'+result.title}>{result.title}</a></li>)}
        );
    //RENDERING
    return(
    
        <form className="searchbar" autoComplete="off"
            onBlur={()=>handleBlur()} 
            >
            <div className="searchbar__form">
                <input id='search'
                className="searchbar__input" placeholder='search flamin 
                recipes...'
                onChange={handleInput}
                ></input>

            </div>
            <ul className="searchbar__resultList" id="searchbar__results">
                {renderList}
            </ul>
        </form>

       
  
    )
}
