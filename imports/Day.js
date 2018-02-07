import React from "react"
export default class Day extends React.Component {
    
    constructor(){
        
        super()
        
        this.state = {

            
                     }
        
    }
    
    
    
    render(){
        debugger
                
        
        return (
            
            <div>
               
                <div>{this.props.dayState.Date}</div>
                <div>Max {this.props.dayState.Max}°C</div>
                <div>Min {this.props.dayState.Min}°C</div>
                <img src={this.props.dayState.Icon}/>
                
            </div>
      
        
        )
      }
    }


