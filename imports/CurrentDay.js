import React from "react"
export default class CurrentDay extends React.Component {
    
    constructor(){
        
        super()
        
        this.state = {

            
                     }
        
    }

        urlCreator(icon){
            
         return <img src = {["http://openweathermap.org/img/w/",icon,".png"].join("")}/>
         
        }
    
    render(){
        
                
              
        if(this.props.apiResponseToday != 0){
              
            
            
        return (
            
            
            
            <center className="day">
                <ul>
                    <li>Today</li>
                    <li>{this.urlCreator(this.props.apiResponseToday.weather[0].icon)}</li>
                    <li>{this.props.apiResponseToday.temp.day}°C Actual </li>

                </ul>
            
            </center>        
        )}
        
        else {
            
            return null
            
        }
      }
    }