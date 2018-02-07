import React from "react"
import Day from "./Day"
export default class ListDays extends React.Component {
    
    constructor(){
        
        super()
        
        this.state = { }        
        
    }
    
    apiResponse(data){
        

    }
    
    dateConverter(date){

        var newDate = new Date(date*1000)
        newDate = newDate.toString().split(" ")[0]
        return newDate
    }
    
    urlCreator(icon){
        
        return ["http://openweathermap.org/img/w/",icon,".png"].join("")
    }

    
    render(){
        
            var that = this
        
            if(this.props.apiResponse.length >0){
                
        
        return (
            
           <div>{this.props.apiResponse.map(function(item, index){
                    
                    
                    if(index != 0){
                            
                            var weekDay = that.dateConverter(item.dt)
                            
                            var tempMin = item.temp.min
                            var tempMax = item.temp.max
                            var icon =  that.urlCreator(item.weather[0].icon)
 
                            var obj = {
                                        Date: weekDay,
                                        Min: tempMin,
                                        Max: tempMax,
                                        Icon: icon,  
                                      }
                        
                            return  (
                                <Day dayState={obj}
                                     key={index}
                                />
                                )
                        }
                })
                }
               
               
           </div>     
        
        )
      }
        
        else return null
        
    }
    }