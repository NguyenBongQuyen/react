// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    //JSX
    render() {
        const myInfor = ["a", "b", "c"]
        return(
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor name="Quyen" age="26"></DisplayInfor>
                <hr></hr>
                <DisplayInfor name="Hello World" age={25} myInfor={myInfor}></DisplayInfor>
            </div>
        );
    };
}

export default MyComponent;