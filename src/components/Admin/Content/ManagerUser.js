import ModalCreateUser from "./ModalCreateUser";

const ManagerUser = (props) => {
  return (
        <div classNameName="manage-user-container">
        <div classNameName="title">Manage User</div>
        <div classNameName="users-content">
            <div>
                <button>Add new user</button>
            </div>
            <div>
                Table user
                <ModalCreateUser></ModalCreateUser>
            </div>
        </div>
        </div>
  );
};

export default ManagerUser;
