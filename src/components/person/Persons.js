import React, { PureComponent} from "react";
import UserOutput from "../UserOutput/UserOutput";

class Persons extends PureComponent {

      // static getDerivedStateFromProps(props, state) {
      //       console.log('Persons.js getDerivedState')
      //       return state;
      // }

      // componentWillMount(){
      //       console.log('Persons.js componentWillUnmount')
      // }

      // componentWillReceiveProps(props) {
      //       console.log('Persons.js componentWillReceiveProps')
      // }

      // componentWillUpdate(){}

      // shouldComponentUpdate(nextProps, nextState) {
      //       console.log('Persons.js shouldComponentUpdate')
      //       return true;
      // }

      getSnapshotBeforeUpdate(prevProps, prevState) { 
            return {alert: alert('You have just deleted one person from your list')};
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Persons.js componentDidUpdate')
            // console.log(snapshot);
      }

      componentWillUnmount(){
            console.log('Persons.js componentWillUnmount')
      }

      render(){
            console.log('[Persons] rendering...');

      return this.props.persona.map((person, index)=>
              <UserOutput
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  named={person.name}
                  userDelete={() => this.props.deletePersons(index)}
                  buttoned                  
              />           
        )
      }

      }


export default Persons;