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
    }

    handleOnMouseOver(event) {
        console.log(event)
    }

    //JSX
    render() {
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    };
}

export default MyComponent;