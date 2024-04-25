import User from "./User";

const UsersList = (props) => {
  return props.userData.map((user) => {
    return <User key={user.id} username={user.userName} age={user.age}></User>;
  });
};

export default UsersList;
