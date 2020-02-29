import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./randomquote.css"






class RandomQuote extends React.Component {
  constructor(props){
        super(props)
        this.state = {
            currentindex:0,
            quote : ['"This is Everthing"',
                    '"what the hell am i doing here"',
                    '"well, this is fun"',
                    '"I hope so"'],
            author : ["Myself",
                     "Unknown",
                     "God",
                     "The Devil"]
        }
      this.changeit = this.changeit.bind(this);
    }
    
    changeit(){                 if(this.state.currentindex<this.state.quote.length-1){
            this.setState({
            currentindex : this.state.currentindex+1
        });
        }
               else{
                   this.setState({
                       currentindex:0
                   })
               }
    }
    render(){
        
        return(
          <div className="flex-box">
       
            <p style={{fontFamily:"Varela Round",fontSize:"1.5rem"}}>{this.state.quote[this.state.currentindex]}</p>
            <p style={{fontFamily:"Varela Round",fontSize:"0.5rem"}}>-{this.state.author[this.state.currentindex]}</p>
            <bts className="btsContainer">
            <button >Share</button>
            <button onClick={this.changeit}>Next</button>
            </bts>
            </div>
            
      
    );
    }
}
ReactDOM.render(<RandomQuote />,document.getElementById("inside"))
