import React, {useEffect} from "react";
import Auxillary from "../hoc/Auxillary";
import divWrap from "../hoc/divWrap";

const Cockpit = props => {


  useEffect(() => {
    console.log("[Cockpit] is in place")

    const timer = setTimeout(() => { 
                  alert('Saved to Cloud');
                }, 2000);
    //Http requests

    return ()=> {
      clearTimeout(timer);
      console.log("[Cockpit] cleanup work in useEffect")}
  }, []);

  useEffect(()=> {
    console.log("[Cockpit] is in the 2nd place")
    return ()=> {
      console.log("[Cockpit] cleanup work in 2nd useEffect")}
  });

     const buttonStyle = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        borderRadius: '20px',
        marginTop: '10px'
    }

    const classes = [];
    if(props.showPersons){
      classes.push('red');// classes = ['red]
    }else{
      classes.push('text-green-600', 'bold');// classes = ['green']
    }

    return <Auxillary>
         <div className=" items-center flex flex-col justify-center mt-6" >
            <h1 className="text-3xl font-semibold" >{props.AppTittle} </h1>
     <button
      onClick={props.togglePersonHandler}
      style={buttonStyle}
    >
      {
        props.showPersons ?
        <span>Show All</span>:
        <span>Show single person</span>      
      }
      </button>
      <p
        className={classes.join(' ')}
      >Things are working fine
      </p>
    
    </div></Auxillary>
    
}

export default divWrap(Cockpit);