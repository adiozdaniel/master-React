import React, { Component } from 'react';

class ComponentWill extends Component {

   state = {
        character: {
            name: "",
            mass: "",
            hair_color: "",
            gender: ""
        }
   }
   
  componentDidMount(){
    console.log("componentDidMount");

    fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => {
        console.log(data);

        this.setState({character: data});
    })
  }
   
    render() {  
        console.log("render")  

        return(
            <div className="bg-blue-200 h-screen w-screen">
                <div className="flex rounded-xl mx-10 w-full bg-gray-100 shadow flex-col justify-center py-10 px-10 items-center">
                    <span>Hello,</span> <span className="text-2xl text-blue-800" >{this.state.character.name} </span> 
                   <p>Your weight is: {this.state.character.mass}</p> 
                   <p>Your hair color is: {this.state.character.hair_color}</p>
                   <p>Your gender is: {this.state.character.gender}</p>                
                </div>
            </div>
        )
    }
}

export default ComponentWill;