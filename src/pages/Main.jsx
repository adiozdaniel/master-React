import React, { Component } from 'react';
import Validation from '../components/Validation';
import Char from '../components/Char';

class Main extends Component{

  state = {
    userInput: ''
  }
 
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);

    const updatedText = text.join('');
    this.setState({ userInput: updatedText});
  }

  render() {
    //Add split(''). to split it into array of strings for mapping
    //Add anonymous key as index
    const charList = this.state.userInput.split('').map((char, index) => {
        return (
          <Char 
            user= {char}
            key={index}
            deleteChar = {this.deleteCharHandler.bind(this, index)}
            />
        )
    })

        // console.log(this.state.currentPerson);
    return (
      <div className="flex flex-col justify-center items-center h-screen" >        
        <input
            type='text'
            value={this.state.userInput}
            onChange={this.inputChangeHandler}
            className='border rounded-md my-6'
        />

        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        <div>
           {charList}
        </div>
      </div>
  );
  }
}

export default Main;