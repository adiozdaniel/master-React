import React, { Component } from 'react';

class Greeting extends Component {  

    render() {
        return(
            <div>
                <Header username="Mark Lumbasi"/>
                <Greater/>
            </div>
        )
    }
};

class Header extends Component {
    render() {
        return(
            <h1>Welcome, {this.props.username}</h1>
        )
    }
};

class Greater extends Component {

    render() {

        const date = new Date();
        const hours = date.getHours();
        let timeOfDay

        if(hours < 12) {
            timeOfDay = "morning"
        }else if (hours >= 12 && hours < 17){
            timeOfDay = " afternoon"
        } else {
            timeOfDay = "night"
        }

        return(
            <>Good, {timeOfDay}, to you! </>
        )
    }
}

export default Greeting;