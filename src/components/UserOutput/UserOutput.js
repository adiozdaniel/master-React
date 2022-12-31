import React, {PureComponent} from 'react';
import './outPut.css';
import WithClass from '../hoc/WithClass';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


class UserOutput extends PureComponent { 

    // componentWillMount(){
    //         console.log('Persons.js componentWillUnmount')
    //   }

    //  shouldComponentUpdate(nextProps, nextState) {
    //         console.log('[UserInput] shouldComponentUpdate')
    //         return true;
    //   }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[UserInput] getSnapshotBeforeUpdate');
            return {message: 'Next Character'};
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('[UserInput] componentDidUpdate')
            console.log(snapshot);
      }
    
      componentWillUnmount(){
            console.log('[UserInput] componentWillUnmount')
      }
    
      render() {
        
    console.log('[UserOutput] rendering....')

    return (
        <WithClass 
            classes ={'flex flex-col justify-center items-center mt-16 mx-6 shadow shadow-black p-3 rounded-lg bg-blue-200'}
        >
        <div>  
            <div 
                className='flex flex-col items-center justify-between' 
            
                >
                <p className='text-sm mr-2' >Search by index: </p>
                 <input name="maxNumber"
                    placeholder={this.props.named}
                    onInput= {(event)=> event.target.value.length > 1 ? 
                                        event.target.value = event.target.value.slice(0, 1)
                                        : 
                                        event.target.value
                                }
                    type = "number"
                    className='rounded-full px-3 my-3 w-32'
                    onChange={this.props.changed}
                />
              
            </div>        
           

            <div  onClick={this.props.onClick} >
                 <p className="text-orange-700" > <span className="text-blue-800 font-bold">User Name is:</span>  {this.props.name}</p>
                <p className="text-indigo-600" > <span className="text-orange-600 font-bold">{this.props.name}'s age is:</span>  {this.props.age}</p>
                <div className="text-green-600">{this.props.children}</div>  
               
            </div>

            {
                this.props.update &&
                <input
                    // onInput= {(event)=> event.target.value }
                    onChange={this.props.updater}
                    placeholder={`user ID: ${this.props.userId}`}
                    className='my-3 rounded-3xl text-center'
                 />}

            {
                this.props.buttoned &&
            <button 
                onClick={this.props.userDelete}
                className="text-red-500 bg-slate-900 px-3 rounded-full" 
                >Remove from list
            </button>}
           {/* <h1>{stateArr[0].persons[0].name}</h1> */}
           
        </div></WithClass>
    )
    }

}

export default UserOutput;