import React from "react"
import axios from "axios"
import ListDays from "./ListDays"
export default class App extends React.Component {
    
    constructor(){
        
        super()
        
        this.state = {apiResponse: [] }
        
    }
    
    
    apiBridge(data){
        
        
        var city = data.data.city.name
        
        var dateArr = data.data.list
        
        var forTheState = []
        
        dateArr.forEach(function(item, index){
                        
            var weekDay = item.dt
            var tempMin = item.temp.min
            var tempMax = item.temp.max
            var icon = item.weather[0].icon  
            
            var obj = {
                        City: city,
                        Date: weekDay,
                        Min: tempMin,
                        Max: tempMax,
                        Icon: icon,                
                      }
            
            forTheState.push(obj)
            
            })
        
                
        
    }
    
    
    getApi(){
        
    
        var that = this
        
        let url = "http://api.openweathermap.org/data/2.5/forecast/daily?id=6356055&units=metric&cnt=8&APPID=71d4009dcf0a0170e9a484cd0064f300"
        
        axios.get(url)
        
        .then((response)=>{
     
            that.setState({apiResponse: response.data.list})
            
        })
        
        .catch((error)=>{
            
        })
        


    }
    

    

    
    render(){
        
                
        
        return (
            
            <div>
            <ListDays apiResponse = {this.state.apiResponse}></ListDays>
            <h1> Hello From Gesù </h1>  
            <button onClick = {this.getApi.bind(this)}> Ola </button>
            </div>
        )
      }
    }