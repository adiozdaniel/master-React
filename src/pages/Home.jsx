import React from 'react';
import ReactDOM from 'react-dom'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

    }

    handleClick(choice) {
        if(choice == this.state.dataSet[this.state.current].correct){
            this.setState({ correct: this.state.correct + 1})
        } else {
            this.setState({incorrect: this.state.incorrect + 1})
        }

        // if(this.state.current == 9){
        //     this.setState({ current: 0})
        //     this.setState({incorrect: 0})
        //     this.setState({correct: 0})
        // } else {
        //     this.setState({ current: this.state.current + 1})
        // }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
   

    render() {
        return (
            <div  
                className="mt-10 text-3xl mx-auto max-w-6xl"
            >
                <h1>It is {this.state.date.toLocaleTimeString()}. </h1>
                {/* <h1 className="text-blue-600" >The last Name is: {this.firstName} </h1> */}
                
            </div>
        )
    }
}

const Home=()=>{

    // const multi=(a=3,b=5) => a*b;
    // console.log(multi(3));
    // const sum = (a,b) => {
    //     console.log(a+b);
    // }

    // sum(3,3, 2,5,6,7);
    // const sum = (...a) => {
    //     console.log(...a);
    // }

    // sum(3,3, 2,5,10,15,35);
    //sum of 10 natural numbers

    // const sum= (...a) => {
    //     // console.log(...a);
    //     let total= 0;

    //     for( let i of a){
    //         total += i
            
    //     }
    //     console.log(total);
    // }

    // sum(3,4, 20, 30, 15, 13, 37);

    //Spread Operator
    // let arr1 = [1,2,3];
    // let arr2 = [4,5,6];   

    // arr1 = arr1.concat(arr2);
    // console.log(arr1);

    // let arr3 = [...arr1];
    // console.log(arr3);

    //Template Literals
    // let name1 = "Khanam";
    // let color = "black";

    // console.log(`My name is ${name1} and favorite color is ${color}`);

    //Array Destructuring
    // let color = ["blue", "yellow", "green", "orange"];
    // console.log(color[2]);

    // let [a,b,c,d] = color;
    // console.log(a);

    //Object destructuring
    // let data = {
    //     place: "Mumbai",
    //     color: "black",
    //     language: "English"
    // };

    // let {place:city, color, language} = data;
    // console.log(city);

    //  let data = {
    //     place: "Mumbai",
    //     color: "black",
    //     language: "English",
    //     food: {
    //         food1: "rice",
    //         food2: "chapati"
    //     }
    // };

    // let {place, color, language, food} = data;
    // console.log(food);

    // let {food1, food2} = food;

    // console.log(food1);

    //new Array methods
    // const reading = Array.from("Purple");
    

    // for(let i of reading) {
    //     console.log(i);
    // }
    
    // let color = ["Purple", "Mango", "yellow", "orange"];
    // const key=color.keys();
    // console.log(key);

    // for(let i of key) {
    //     console.log(i);
    // }

    // //Maths
    // console.log(Math.trunc(3.33)) //3
    // console.log(Math.trunc(-3.33)) //-3
    // console.log(Math.sign(2))// 1
    // console.log(Math.sign(0))// 0
    // console.log(Math.sign(-5))// -1
    // console.log(Math.sqrt(4))// 2
    // console.log(Math.cbrt(125))// 5
    // console.log(Math.log10(10))// 1
    // console.log(Math.log2(10))// 3.321....

//    console.log(foods);


    //for HTML
    // window.addEventListener('DOMContentLoaded', function() {
    //     let menu=menuItems[currentMenu];
    //     item.textContent = menu.items;
    //     oneLiner.textContent = menu.oneLiner;
    //     img.src = menu.img;
    //     hotel.textContent = menu.hotel;
    //     desc.textContent = menu.desc;
    // });

    // const item = document.getElementById('item');

    //html file
    // <div class="container" >
    //     <div class="menuBox" >
    //         <h1 id="item"></h1>
    //         <p id="oneLiner" ></p>
    //     </div>
    // </div>

     // const person = {
    //     name: "Mosh",
    //     walk(){
    //         console.log(this);
    //     }
    // }

    // const walk = person.walk.bind(person);
    // walk();

   

    // const jobs = [
    //     {id: 1, isActive: true},
    //     {id: 2, isActive: true},
    //     {id: 3, isActive: false}
    // ];

    // // const activeJobs = jobs.filter(function(job){ return job.isActive});
    // const activeJobs = jobs.filter((job)=>  job.isActive === false);
    // console.log(activeJobs);

const menuItems = [
      
        {
            id: 1,
            items: "Chapo chapo",
            oneLiner:"the best in town",
           img: "https://res.cloudinary.com/dashoh/image/upload/v1671471086/avatars/kg10ba1vnhkxhcqlbthb.jpg",
           hotel: "mama mboga",
            desc: "chapo"
        },
       {
            id: 2,
            items: "Mandazi",
            oneLiner:"the best in town",
           img: "https://res.cloudinary.com/dashoh/image/upload/v1671610184/avatars/dashoInc/ufpkanrgxnrorqnwew2j.png",
           hotel: "muliko",
            desc: "Mandazi tamu"
        },
        {
            id: 3,
            items: "Sukuma",
            oneLiner:"the best in town",
           img: "https://res.cloudinary.com/dashoh/image/upload/v1671549545/avatars/dashoInc/ctm5dhgkq62uezjqozuq.png",
           hotel: "Murugeri",
            desc: "sukuma wiki"
        },
       {
            id: 4,
            items: "Ugali",
            oneLiner:"the best in town",
           img: "https://res.cloudinary.com/dashoh/image/upload/v1670974382/avatars/dashoInc/wdo8q2x1cqpl4xklthax.jpg",
           hotel: "na githeri",
            desc: "Ugali moto"
        },

    ]

    const [currentMenu, setCurrentMenu] = React.useState(0);

    // let currentMenu = 3;
    
    let menu=menuItems[currentMenu];
    let maxNumber = menuItems.length - 1;

    // console.log(maxNumber);

    const forwardMenu = () => {

        if(currentMenu === maxNumber || currentMenu > maxNumber) {
           return setCurrentMenu(0);
        }
             
        setCurrentMenu(currentMenu + 1);
    }

    console.log(currentMenu);

    const randomMenu = () => {
        setCurrentMenu(Math.floor(Math.random() * menuItems.length));
    };

    const previousMenu =()=> {

        if(currentMenu === 0){
           return setCurrentMenu(maxNumber);
        }
        // if(currentMenu)
        setCurrentMenu(currentMenu -1)
    }

    return (
        <div>
            <Clock/>                   
            <FilterableProductTable products={PRODUCTS}/>
            <NumberList numbers={numbers} />
        </div>
    )
};

export default Home;

const numbers = [1, 2, 3, 4, 5];

function ListItem(props){
    return <li> {props.value} </li>
};

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    <ListItem
        key={number.toString()}
        value={number}
    />);

    return (
        <ul>
            {listItems}
        </ul>
    )
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({filterText: filterText});
    }

    handleStockChange(inStockOnly) {
        this.setState({inStockOnly: inStockOnly});
    }

    render() {
        return (
            <div className="flex">
                <SearchBar filterText={this.state.filterText}
                inStockOnly = {this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onStockChange={this.handleStockChange}/>

                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                ></ProductTable>
             <div 
                className="flex flex-col justify-center items-center" 
                >
            <ul className="shadow shadow-black p-6 rounded-xl m-6" >
                <li>
                  
                </li>
                <li>
                
                </li>
                <li>
                   
                </li>
            </ul>

            <button 
               
                className="px-6 py-2 w-32 shadow-sm text-sm text-white hover:text-slate-900 rounded-full m-3 border bg-blue-700 hover:bg-blue-400" >back </button>
    
           </div>

           
        </div>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(event) {
        this.props.onFilterTextChange(event.target.value);
    }

    handleInStockChange(event) {
        this.props.onInStockChange(event.target.checked);
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder='Search...'
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                    />
                <p>
                    <input 
                        type="checkbox" 
                        checked = {this.props.inStockOnly}
                        onChange = {this.handleInStockChange}
                        />
                    {' '}
                    only show products in Stock
                </p>
            </form>
        )
    }
};


class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;

        return (
            <tr>
                <th colSpan="2">{category}</th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
     render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span className="text-red-600" >
                {product.name}
            </span>;

            return(
                <tr>
                    <td>{name}</td>
                    <td>{product.price}</td>
                </tr>
            )
     }
}


class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach(product => {
            if(product.name.indexOf(filterText) === -1){
                return;
            }
            if(inStockOnly && !product.stocked){
                return;
            }
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow
                        category = {product.category}
                        key={product.category}
                    />
                );
            }

            rows.push(
                <ProductRow
                    product = {product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked:true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked:false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked:false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

  class Apper extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                header: "Header from state...",
                content: "Content from state..."
            }

            this.handleClick = this.handleClick.bind(this);
        }

        handleClick(event) {
            this.setState({
                liked: !this.state.liked
            })
        }

        render() {
            var text = this.state.liked ? 'like' : 'you do not have likes'

            return (
                <div className="mx-10 shadow shadow-black p-4 rounded-md" >
                    <Updater/>
                    <p>
                        {text}.
                    </p>
                    <button
                        className='bg-blue-600 px-3 py-2 rounded-full w-32'
                        onClick={this.handleClick} 
                    >like</button>
                </div>
            );
        }
    };

class Updater extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial Data..'
        }

        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    //End of constructor

    updateState(e){
        this.setState({
            data: e.target.value
        })
    };

    clearInput(){
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
        return(
            <div>
                <input 
                    type="text" 
                    value={this.state.data}
                    onChange={this.updateState}
                    ref="myInput" 
                    />
                <button
                    onClick={this.clearInput}
                >CLEAR</button>
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}

// class Content extends React.Component {
//     render() {
//         return(
//             <div>
//                 <button onClick={this.props.updateStateProp} ></button>
//                 <h3>{this.props.myDataProp}</h3>
//             </div>
//         )
//     }
// }

// class Login extends React.Component {
//     constructor(props){
//     super(props);
//     this.state = {isToggleOn: true}

//     this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     render() {
//         return(
//             <button 
//                 onClick={this.handleClick}
//                 className="bg-blue-600 px-3 py-2 rounded-full w-32">
//                 {this.state.isToggleOn ? 'ON':'OFF'}
//             </button>
//         )
//     }
// };

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1> {this.props.headerProp} </h1>
//             </div>
//         )
//     }
// };

// class Crawl extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1> {this.props.headerProp} </h1>
//             </div>
//         )
//     }
// };

