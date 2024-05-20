import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        //destructuring array/object
        const {listUser} = this.props;

        //Props => viết tắt properies
        return(
            <div className="display-infor-container">
                <img src={logo}></img>
                <div>
                    <span onClick={() => {this.handleShowHide()}}>
                    {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"} 
                    </span>
                </div>
                {this.state.isShowListUser && 
                    <div>
                    {listUser.map((user) => {
                        return(
                            <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                                <hr></hr>
                            </div>
                        )               
                    })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;