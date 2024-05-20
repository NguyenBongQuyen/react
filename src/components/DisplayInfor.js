import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const {listUser} = this.props;
        //Props => viết tắt properies
        return(
            <div>
                {listUser.map((user) => {
                    return(
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor;