import React from "react";
import './DisplayInfor.scss';

//Stateful
// class DisplayInfor extends React.Component {
//     render() {
//         console.log("Call me render")
//         //destructuring array/object
//         const {listUser} = this.props;

//         //Props => viết tắt properies
//         return(
//             <div className="display-infor-container">
//                 {true && 
//                     <>
//                         {listUser.map((user) => {
//                             return(
//                                 <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>
                                
//                             )               
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

//Stateless
const DisplayInfor = (props) => {
    const {listUser} = props;
    return(
        <div className="display-infor-container">
            {true && 
                <>
                    {listUser.map((user) => {
                        return(
                            <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                            </div>
                            
                        )               
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;