// class component
// function component

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Hello World',
        address: 'Hà Nội',
        age: 25
    };

    //JSX
    render() {
        return(
            <div>
                My name is {this.state.name}
            </div>
        );
    };
}

export default MyComponent;