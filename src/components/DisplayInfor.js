import React from "react";
import './DisplayInfor.scss';
// import logo from '../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log("Call constructor: 1")
        super(props);
        //babel compiler
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log("Call me component did mount")
        setTimeout(() => {
            document.title = "React with beginner"
        }, 3000)
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        console.log("Call me component did update", this.props, prevProps)
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert("You got 5 users")
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        console.log("Call me render")
        //destructuring array/object
        const {listUser} = this.props;

        //Props => viết tắt properies
        return(
            <div className="display-infor-container">
                {/* <img src={logo} alt=""></img> */}
                <div>
                    <span onClick={() => {this.handleShowHide()}}>
                    {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"} 
                    </span>
                </div>
                {this.state.isShowListUser && 
                    <>
                        {listUser.map((user) => {
                            return(
                                <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
                                    <div>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>
                                
                            )               
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;