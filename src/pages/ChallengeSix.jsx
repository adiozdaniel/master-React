import React, { Component } from 'react';

class ChallengeSix extends Component {

   state = {
        firstName: "Mercy",
        lastName: "Kweyu",
        phone: "+ 254 755 755 305",
        email: "john@example.com",
        isFavorite: false
   }
   
   toggleFavorites=()=> {
    this.setState(prevContact => ({
        isFavorite: !prevContact.isFavorite
    }));
   }
   
    render() {
        let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png";

        return(
            <div className="bg-blue-200 h-screen w-screen">
                <div className="flex rounded-xl mx-10 w-full bg-gray-100 shadow flex-col justify-center py-10 px-10 items-center">
                    <div className="" >
                         <img 
                            onClick={this.toggleFavorites}
                            className='h-32 w-32 object-fill rounded-full'
                            src="https://res.cloudinary.com/dashoh/image/upload/v1671549545/avatars/dashoInc/ctm5dhgkq62uezjqozuq.png" 
                            alt="" /> 
                    </div>
                    {starIcon}
                    <p className='text-3xl text-bold' >
                        {this.state.firstName} {' '} {this.state.lastName}
                    </p>
                    <p className='text-gray-400' >
                        {this.state.phone}
                    </p>  
                    <p className='text-gray-400' >
                        {this.state.email}
                    </p>                                     
                </div>
            </div>
        )
    }
}

export default ChallengeSix;