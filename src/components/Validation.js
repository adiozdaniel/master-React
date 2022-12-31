import React from 'react';

const Validation = (props) => {

    let validationMessage = 'Text long enough';

    if(props.inputLength <= 5){
        validationMessage = 'Text too short!';
    }
    // console.log(validationMessage);

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default Validation;