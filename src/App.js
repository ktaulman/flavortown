import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import FoodNews from './components/FoodNews';
import Trending from './components/Trending';
import Highest from './components/Highest';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newsFeed:{},
      trendingRecipes:[],
      highestRecipes:[]
    }
  }
  componentDidMount(){
        let p1=fetch('http://localhost:3000/news')
        let p2=fetch('http://localhost:3000/trending')
        let p3=fetch('http://localhost:3000/highest')
   
    Promise.all([p1,p2,p3])
    .then(
      ([res1,res2,res3])=>{
        Promise.all([
          res1.json(),
          res2.json(),
          res3.json()
        ])
        .then(([data1,data2,data3])=>{
          this.setState({newsFeed:data1});
          this.setState({trendingRecipes:data2});
          this.setState({highestRecipes:data3});
          console.log("data1",data1);
          console.log("data2",data2);
          console.log("data3",data3)
        })
      }
    )
  }

  render(){
    const{newsFeed,trendingRecipes,highestRecipes}=this.state;
   return (
    <div className="App">

      <NavBar/>
      <SearchBar />
       
      <main className='main'>
        {newsFeed.author?
        <section className="main__banner">
          <FoodNews
            data={newsFeed}
            source={newsFeed.source.name}
          />
        
          <Trending 
            data={trendingRecipes}
          />

          <Highest 
            data={highestRecipes}
          />
        </section>
        :
        <div></div>
        }
      </main>
</div>
  )
}
}
 


export default App;
