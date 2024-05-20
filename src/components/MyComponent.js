// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            {id: 1, name: "Quyen", age: "20"},
            {id: 2, name: "Hello", age: "25"},
            {id: 3, name: "World", age: "30"}       
        ]
    }

    //JSX
    render() {
        return(
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>
        );
    };
}

export default MyComponent;