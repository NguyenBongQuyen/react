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

    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUser: listUserClone
        })
    }

    //JSX
    render() {
        return(
            <>
                <div className="a">
                    <AddUserInfor 
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br></br>
                    <DisplayInfor 
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b">

                </div>
            </>
        );
    };
}

export default MyComponent;