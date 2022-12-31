import React from "react";
import UserOutput from "../UserOutput/UserOutput";

const PersonsChoice = (props) => {

  console.log(props.age);

return (
    <UserOutput 
        // onClick={()=> props.handleChange(3)}
        // onClick={props.handleChange.bind(props, 3)}
          updater={props.updaterHandler}
          userId={props.personsID}
          update
          changed={props.changeInput}
          maxLength={props.maxLength}
          onClick={props.handleChange}
          named={props.named}
          name={props.name} 
          age={props.age}
        > My Hobbies: {props.hobbies}
    </UserOutput>)
}

export default PersonsChoice;