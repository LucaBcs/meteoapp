import React from "react"
export default class Day extends React.Component {
    
    constructor(){
        
        super()
        
        this.state = {

            
                     }
        
    }
    
    
    
    render(){
        
                
        
        return (
            
            <center className="day">
               
                <div>{this.props.dayState.Date}</div>

                <img src={this.props.dayState.Icon}/>
                
                <div>Max {this.props.dayState.Max}°C</div>
                <div>Min {this.props.dayState.Min}°C</div>
                
            </center>
      
        
        )
      }
    }


