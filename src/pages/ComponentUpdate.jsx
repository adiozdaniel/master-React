import React, { Component } from 'react';

class ComponentUpdate extends Component {

  state = {
    count: 1,
    character: {}
  }   

    add =() => {
        this.setState(preCount => ({count: preCount.count + 1}))
            }
    
    subtract =() => {
        this.setState(preCount => ({count: preCount.count - 1}))
            }
    
    getStarWarsCharacter =(id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(data => this.setState({character: data}))
    }

    componentDidMount(){
        this.getStarWarsCharacter(this.state.count);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("updated")
        if(prevState.count !== this.state.count){
            this.getStarWarsCharacter(this.state.count);
        }
        //  this.getStarWarsCharacter(this.state.count);
    }

    render() {
        return(
            <div className="bg-blue-200 h-screen w-screen">
                <div className="flex flex-col justify-center py-10 px-3 items-center">
                <h1 className="text-blue-500 font-bold my-6 text-xl" >Counter </h1>
                <div className="flex items-baseline">
                    <div  
                        onClick={this.subtract}
                        className=" flex justify-center items-center h-20 w-20 rounded-full text-2xl bg-gray-500 shadow-xl shadow-blue-300"  >
                         <h1 
                        className="font-bold p-3 text-4xl ">
                            -
                    </h1>
                    </div>
                    <div 
                    className=" flex justify-center items-center h-40 w-40 rounded-full text-2xl bg-white shadow-xl shadow-blue-300"                    
                    >
                    <h1 
                        className="font-bold p-3 text-9xl ">
                            {this.state.count}
                    </h1>
                </div>
                 <div  
                    onClick={this.add}
                    className=" flex justify-center items-center h-20 w-20 rounded-full text-2xl bg-gray-500 shadow-xl shadow-blue-300"  >
                         <h1 
                        className="font-bold p-3 text-4xl ">
                            +
                    </h1>
                    </div>
                </div>

                <h1 
                    className="font-bold my-3 text-pink-700">
                        {this.state.character.name || "Loading..."}
                        </h1>
                
                </div>
            </div>
        )
    }
}

export default ComponentUpdate;