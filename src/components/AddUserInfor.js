import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: "",
//         address: 'Ha Noi',
//         age: ""
//     };

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();

//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age
//         })
//     }

//     render() {
//         return(
//             <div>
//                 My name is {this.state.name} and I'm {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name: </label>
//                     <input 
//                         value={this.state.name}
//                         onChange={(event) => this.handleOnChangeInput(event)}>
//                     </input>
                
//                     <label>Your age: </label>
//                     <input 
//                         value={this.state.age}
//                         onChange={(event) => this.handleOnChangeAge(event)}></input>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState('');

    // const [address, setAddress] = useState('Ha Noi');

    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: name,
            age: age
        })
    }

    return(
        <div>
            My name is {name} and I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input 
                    value={name}
                    onChange={(event) => handleOnChangeInput(event)}>
                </input>
            
                <label>Your age: </label>
                <input 
                    value={age}
                    onChange={(event) => handleOnChangeAge(event)}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfor;