import React, { Component } from 'react';

class ChallengeFour extends Component {

    // constructor(props){
    //     super(props);         
    //     this.state = {
    //         goOut: "Yes"
    //     }
    //     this.toggleGoOut = this.toggleGoOut.bind(this);
    // }

    state = {
            goOut: "Yes"
        }

    toggleGoOut = () => {
        this.setState(prevState => {
            return {
                goOut: prevState.goOut ==='Yes' ? 'No' : 'Yes'
            }
        })
    }

    render(){
        return (
            <div className="bg-gray-600 h-screen w-screen">
                <div className="flex flex-col justify-center py-10 px-3 items-center">
                <h1 className="text-blue-500 font-bold text-xl" >Should I go out tonight? </h1>
                <div 
                    className="rounded-full text-2xl bg-white"
                    onClick={this.toggleGoOut}
                    >
                    <h1 className=" font-bold p-3 shadow-xl shadow-blue-300">{this.state.goOut}</h1>
                </div></div>
            </div>
        )
    }
};

export default ChallengeFour;