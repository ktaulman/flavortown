import React from 'react'

class SignIn extends React.Component{
   constructor(props){
       super(props);
       this.state={
           isDropDownClicked:false,
           signInEmail:'',
           signInPassword:''
       }
   }

   signInClicked(){
       const{isDropDownClicked}=this.state;
       this.setState({isDropDownClicked:!isDropDownClicked})
       let signIn=document.getElementsByClassName('signInDD__wrapper')[0]
       if(!isDropDownClicked){
            signIn.classList.add("DD--clicked")
        }
        else{
            signIn.classList.remove("DD--clicked")
        }       
   }
   render(){
   return(
        <div className="signInDD__wrapper">
           
                <h2 
                className="signInDD__title"
                onClick={()=>this.signInClicked()}
                >
                SignIn
                </h2>
          
            {this.state.isDropDownClicked?
                <div><ul className="signInDD__list">
                <li className="signInDD__item">
                    <label className="signInDD__label" htmlFor="signInEmail">
                        Email: 
                    </label>
                    <input className="signInDD__input" type="text" id="signInEmail"></input>
                </li>
                <li className="signInDD__item">
                    <label className="signInDD__label" htmlFor="signInPassword">
                        Password: 
                    </label>
                    <input className="signInDD__input" type="text" id="signInPassword"></input>
                </li>
                <button className="signInDD__button">Submit</button>
            </ul></div>
                :
            <div></div>

            }
            
        </div>
    )
   }
}

export default SignIn;