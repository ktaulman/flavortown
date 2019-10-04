import React from 'react';

class FoodNews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        this.setState({
            data:this.props.data,
        })
        
    }
    render(){
        let {title,urlToImage,description,url,author}=this.props.data;
        return(
        <article className="news">
        <h2 className="news__type">Food News</h2>
        <div className="news__item">
          
          <header className="news__header">
            <a className="news__title" href={url}>      {title}
            </a>
            <div>
            <img 
            className="news__image"
            src={urlToImage} alt='' height={100} width={175}
            />
          </div>
            <summary className="news__description">{description}</summary>
          </header>
          <footer>
              <p className="news__author">{`By:${author}, ${this.props.source}`} 
            </p>
          </footer>
        </div>
        </article>
        )
    
        
    }
}

export default FoodNews; 