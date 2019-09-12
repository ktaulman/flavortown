const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors= require('cors');
const querystring=require('querystring')
const https=require('https');
const axios=require('axios');
const fs=require('fs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());



//gets 
app.get("/",(req,res)=>{
    res.json("API RUNNING")
})
//Using a News API 
app.get('/news',(req,res)=>{
    let queryString=querystring.stringify({
        q:"food",
        apiKey:'249dc229eed74b81b85fe7feb1e25692',
    })
    console.log('/news,pinged')
    axios.get(`https://newsapi.org/v2/everything?${queryString}`).then(data=>res.json(data.data.articles[Math.floor(Math.random()*6)]))
})

app.get('/search',(req,res)=>{
    let queryString=querystring.stringify({
        key:'f6d2ff5941cc8b88fe90d79c3a0da4fd',
        q:'sandwich pork'
    })
    console.log("created queryString",queryString);

   axios.get(`http://www.food2fork.com/api/search?${queryString}&page=1`).then(data=>res.json(data.data))
})

//For Trending Recipes 
app.get('/trending',(req,res)=>{
    let queryString=querystring.stringify({
        key:'f6d2ff5941cc8b88fe90d79c3a0da4fd',
        sort:'t'
    })
    console.log("/trending PINGED");

   axios.get(`http://www.food2fork.com/api/search?${queryString}`).then(json=>{
       let fullArray=json.data.recipes;
       let resArray=[];
       for(let i=0;i<10;i++){
        let data=fullArray[i];
            resArray.push({
                title:data.title,
                source_url:data.source_url,
            });
        
       }
       res.json(resArray)

   })

})


app.get('/highest',(req,res)=>{
    let queryString=querystring.stringify({
        key:'f6d2ff5941cc8b88fe90d79c3a0da4fd',
        sort:'r'
    })
    console.log('/highest PINGED')

   axios.get(`http://www.food2fork.com/api/search?${queryString}`).then(json=>{
        let fullArray=json.data.recipes;
        let resArray=[];
        for(let i=0;i<10;i++){
            let data=fullArray[i];
            resArray.push({
                title:data.title,
                source_url:data.source_url
            });
            
        }
        res.json(resArray)
    })
    .catch(err=>err)
})

app.listen(3000,console.log("Port is running on 3000"))
