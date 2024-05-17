// class component
// function component

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Hello World',
        address: 'Ha Noi',
        age: 25
    };

    handleClick(event) {
        console.log("Click me my button");
        console.log("My name is", this.state.name)

        this.setState ({
            name: 'Quyen',
            age: Math.floor((Math.random() * 100 + 1))
        })
    }

    handleOnMouseOver(event) {
        console.log(event)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    //JSX
    render() {
        return(
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default MyComponent;