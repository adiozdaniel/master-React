import React, { Component } from 'react';

class ComponentDid extends Component {

    state = JSON.parse(localStorage.getItem("formData")) || {
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        employment: false,
        favColor: ''
    }

    handleChange = (event) => {
        const {name, value, type, checked } = event.target;

        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) : 
            this.setState({
                [name]: value
            })
    }

    componentDidMount() {
        console.log("mount")
        // this.setState(JSON.parse(localStorage.getItem("formData")));
    };
    componentDidUpdate() {
        console.log("update")
        localStorage.setItem("formData", JSON.stringify(this.state));
    };

    render() {
        console.log("render")
        return(
            <div className="h-screen w-screen bg-gray-200  flex justify-center items-center">
                <form 
                    className="flex flex-col rounded-xl space-y-3 w-72 bg-gray-500 p-6" >
                    <input 
                        type="text" 
                        placeholder='First Name'
                        className='p-2 shadow border rounded-md'
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder='Last Name'
                        className='p-2 shadow border rounded-md'
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email" 
                        placeholder='Email'
                        className='p-2 shadow border rounded-md'
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                    />

                     <input 
                        type="text" 
                        placeholder='Comments'
                        className='p-2 shadow border rounded-md h-28'
                        value={this.state.comments}
                        name="comments"
                        onChange={this.handleChange}
                    />

                    <div className='text-blue-900' >
                         <h1>Current employment status</h1>
                        <p>Unemployed</p>
                        <p>Part-Time</p>
                        <p>Full-time</p>
                    </div>

                   
                </form>
            </div>
        )
    }

}

export default ComponentDid;