import React, { Component} from 'react';
import Cockpit from '../components/cockpit/Cockpit';
import Auxillary from '../components/hoc/Auxillary';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// import ComponentUnmount from './pages/ComponentUnmount'
// import UserInput from './UserInput/UserInput';
// import UserOutput from '../components/UserOutput/UserOutput';
import Persons from '../components/person/Persons';
// import PersonsChoice from '../components/person/Persons';
import UserOutput from '../components/UserOutput/UserOutput';



class Apped extends Component {

  state = {
     persons: [
        {name: 'John', age: 32, hobbies: 'Soccer', id: 'dhiee9'},
        {name: 'Mary', age:28, hobbies: 'Tennis', id: '993djde'},
        {name: 'Bob', age:16, hobbies: 'Singing', id: '938djei'},
        {name: 'Stephanie', age:24, hobbies: 'Worshipping', id: 'lkd334'},
        {name: 'Milka', age: 18, hobbies: 'Rugby', id: '93ku4u'},
        {name: 'Otieno', age:27, hobbies: 'Karate', id: 'i3u43dd'},
        {name: 'Zacky', age:32, hobbies: 'Gospel', id: '849dij4'},
        {name: 'Bulawayo', age:29, hobbies: 'Dancing', id: '9k3ue883'}
       
    ],
    currentPerson: 0,
    showPersons: true,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillUnmount(){
    console.log('[App.js] componentWillUnmount')
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
            console.log('Persons.js shouldComponentUpdate');
      if(
        nextProps.Persons !== this.props.Persons || 
        nextProps.deletePersons !== this.props.deletePersons
        ){
        return true;
      } else if(this.state.persons.length <= 0){
        return false;
      }

          //  if (this.state.persons.length <= 1){
          //   return false;
          //  }
            return true;
      }
  
  // handleChange = (number) => {
   handleChange = () => {

    const maxNumber = this.state.persons.length - 1;
    // if(this.state.currentPerson === number){
    if(this.state.currentPerson > maxNumber){
      return this.setState({currentPerson: 0});
    }
    if(this.state.currentPerson === maxNumber){
      return this.setState({currentPerson: 0});    
    } else {
    if( this.state.currentPerson < this.state.persons.length){
        this.setState(prevState => {
              return {
                  currentPerson: prevState.currentPerson +1,
                  changeCounter: prevState.changeCounter + 1
              }
          })  }}

  }

  nameChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      currentPerson: event.target.value
    })
  }

  changeInput = (event) => {  
    const maxNumber = this.state.persons.length - 1;

    // console.log(this.state.currentPerson);
    // const currentPerson = Object.assign({}, this.state.currentPerson === event.target.value)
    
     if(event.target.value === '' || event.target.value > maxNumber){
      return this.setState({currentPerson: 0});
    }
    else {
    if( event.target.value <= maxNumber){
        this.setState(() => {
              return {
                  currentPerson: event.target.value
              }
          })  }} 
  }

  togglePersonHandler=()=>{
    let doesShow = this.state.showPersons;
    // const newList = this.state.persons;

    this.setState({persons:  
      [
        {name: 'John', age: 32, hobbies: 'Soccer', id: 'dhiee9'},
        {name: 'Mary', age:28, hobbies: 'Tennis', id: '993djde'},
        {name: 'Bob', age:16, hobbies: 'Singing', id: '938djei'},
        {name: 'Stephanie', age:24, hobbies: 'Worshipping', id: 'lkd334'},
        {name: 'Milka', age: 18, hobbies: 'Rugby', id: '93ku4u'},
        {name: 'Otieno', age:27, hobbies: 'Karate', id: 'i3u43dd'},
        {name: 'Zacky', age:32, hobbies: 'Gospel', id: '849dij4'},
        {name: 'Bulawayo', age:29, hobbies: 'Dancing', id: '9k3ue883'}
      ]
    });

    this.setState({showPersons: !doesShow});    

    // if(this.state.showPersons){
    //    this.setState({showPersons: false })
    // }
    // else{
    //   this.setState({showPersons: true })
    // }
   
  }

  updaterHandler = (event) => {

    // const personIndex = this.state.persons.findIndex(p => {
    //   return p.id === userId
    // });

    const person = this.state.persons[this.state.currentPerson];
    person.name = event.target.value;

    this.setState({
      person : 
          {
            name: event.target.value
          }
      
    })

    // const person = Object.assign({}, this.state.persons[personIndex])
    // console.log(person);

  }

  deletePersons = (userIndex) => {
      // const persons = this.state.persons.slice();
      let persons = [...this.state.persons];
      persons.splice(userIndex, 1);
      this.setState({persons: persons});
  }

  handleCockpit = () => {
    let myCockpit = this.state.showCockpit;
    this.setState({showCockpit: !myCockpit});
  }
 
  render() {

    console.log('[App.js] render')
    
    let persons = null;

    if(this.state.showPersons){
      persons = <UserOutput 
        // onClick={()=> this.handleChange(3)}
        // onClick={this.handleChange.bind(this, 3)}
          updater={this.updaterHandler}          
          userId={this.state.persons[this.state.currentPerson].id}
          update
          changed={this.changeInput}
          maxLength={this.maxLength}
          onClick={this.handleChange}
          named={this.state.persons[this.state.currentPerson].name}
          name={this.state.persons[this.state.currentPerson].name} 
          age={this.state.persons[this.state.currentPerson].age}
        > My Hobbies: {this.state.persons[this.state.currentPerson].hobbies}
    </UserOutput>
    }

    let myList
    let persona = this.state.persons; 

    if(!this.state.showPersons){
      myList = (
            <div >
        {
          this.state.persons.length <= 0?
          <div className="text-7xl mt-9"
           >
            🙄
          </div>:
          <Persons
            persona= {persona}            
            deletePersons={this.deletePersons}           
          />
        }
        </div> 
      );     
    }

    // console.log(this.state.showCockpit)

    return <Auxillary>
      
   <div  className="text-center flex flex-col justify-center items-center" >
    {
      this.state.showCockpit ?
      <Cockpit
      AppTittle={this.props.AppTittle}
      togglePersonHandler={this.togglePersonHandler}
      showPersons={this.state.showPersons}
    />: null}  
        {persons }
        {myList}

        <button 
          onClick={this.handleCockpit}
          className="px-6 bg-slate-900 text-yellow-400 rounded-full mt-6"
          >Remove Cockpit</button> 

          <span className="text-orange-600">You have changed: {' '}{this.state.changeCounter}{' '}persons</span> 
    </div>
    </Auxillary>
    
  }
  
}

export default Apped;
