import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Hello World',
        address: 'Ha Noi',
        age: 25
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return(
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input 
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Submit</button>
                    <br/>
                    <label>Your age: </label>
                    <input 
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;