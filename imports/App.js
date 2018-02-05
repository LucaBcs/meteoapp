import React from "react"
export default class App extends React.Component {
    
    constructor(){
        
        super()
        this.state = {
            people:[{name: "Antonello"},{name: "Gesù"}, {name: "Giuseppe"}, {name: "Maria"},  ]
            
        }
        
    }
    
    deleteStuff(index){
        
        var.arr = this.state.peoplearr.splice(index,1)
        this.setState()
    
    }
    
    render(){
        return <h1> Hello From Meteor </h1>
    }
    
}