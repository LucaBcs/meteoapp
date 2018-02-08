import React from "react"
import axios from "axios"
import ListDays from "./ListDays"
import CurrentDay from "./CurrentDay"
import Gmaps from "./Gmaps"

export default class App extends React.Component {
    
    constructor(){
        
        super()
        
        this.state = {apiResponse: [], apiResponseToday: 0, apiCity:"" }
        
    }
    
    componentWillMount(){
        
        var that = this
        
        
        
        var latitude = 41.385064
        var longitude = 2.173403
        
        let url = ["http://api.openweathermap.org/data/2.5/forecast/daily?lat=", latitude, "&lon=" , longitude, "&units=metric&cnt=8&APPID=71d4009dcf0a0170e9a484cd0064f300"].join("")
        
        axios.get(url)
        
        .then((response)=>{
        
        that.setState({apiResponse: response.data.list, apiResponseToday: response.data.list[0], apiCity: response.data.city.name})
            
        })
        
        .catch((error)=>{
            
        })
        
        
    }
    
  
    cityChange(latlong){
        
        var that = this
        
        let latitude = latlong.lat 
        let longitude = latlong.lng 
        
        let url = ["http://api.openweathermap.org/data/2.5/forecast/daily?lat=", latitude, "&lon=" , longitude, "&units=metric&cnt=8&APPID=71d4009dcf0a0170e9a484cd0064f300"].join("")
        
        axios.get(url)
        
        .then((response)=>{
        
        that.setState({apiResponse: response.data.list, apiResponseToday: response.data.list[0], apiCity: response.data.city.name})
            
        })
        
        .catch((error)=>{
            
        })
        
    }
    

    
    render(){
        
                
        
        return (
            
            <div>
                <div className="containerApp">
                <center></center>
                <center>
                   <i className="fas fa-map-marker-alt icon"></i>
                    <h1> {this.state.apiCity} </h1>
                    <Gmaps cityChange = {this.cityChange.bind(this)}></Gmaps>
                    <CurrentDay apiResponseToday = {this.state.apiResponseToday}></CurrentDay>
                    <ListDays apiResponse = {this.state.apiResponse}></ListDays>
                </center>
                <div></div>
                </div>
            </div>
            
        )
      }
    }