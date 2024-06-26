import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";

const ManagerUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)

    const [listUsers, setListUsers] = useState([])

    //componentDidMount
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async() => {
        let response = await getAllUser();
        if (response.EC === 0) {
            setListUsers (response.DT)
        }
    }

    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" 
                        onClick={() => setShowModalCreateUser(true)}> 
                        <FcPlus/> Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers = {listUsers}/>
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser} 
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}>
                </ModalCreateUser>
            </div>
        </div>
    );
};

export default ManagerUser;
