import React from 'react';

const Char = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }
    // console.log(validationMessage);

    return (
        <div style={style} onClick={props.deleteChar} >
           {props.user}
        </div>
    )
}

export default Char;