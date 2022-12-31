import React, { Component} from 'react';

class ComponentUnmount extends Component {

    state = {
        windowWidth: window.innerWidth,
        showWindow: true
    }

    watchWidth = () => {
        this.setState({ windowWidth: window.innerWidth});
    }

    componentDidMount() {
        window.addEventListener("resize", this.watchWidth);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.watchWidth);
    }

    hideWindow =()=>{
         this.setState(prevState => {
            return {
                showWindow: prevState.showWindow === true ? false : true
            }
        })
    }

    render() {
        // console.log(this.state.showWindow);
        return(
            <div className="bg-pink-900 w-screen h-screen">
                <div className="flex justify-center">
                    <div className="flex flex-col mt-6 justify-center items-center">
                        <button
                            onClick={this.hideWindow}
                            className='bg-white py-2 px-6 rounded-full shadow m-6'
                        >
                            Toggle Window Tracker
                        </button>

                        {
                            this.state.showWindow &&
                            <h1 className="text-white font-bold text-2xl">
                            Window Width: {this.state.windowWidth}px
                        </h1>}

                    </div>
                     
                </div>
                
            </div>           
        )
    }
}

export default ComponentUnmount;