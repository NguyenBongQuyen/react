// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            {id: 1, name: "Quyen", age: "20"},
            {id: 2, name: "Hello", age: "25"},
            {id: 3, name: "World", age: "30"}       
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    //JSX
    render() {
        return(
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
                <br></br>
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>
        );
    };
}

export default MyComponent;