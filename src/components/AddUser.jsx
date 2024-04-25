import { useState } from "react";
import "./AddUser.css";
const AddUser = (props) => {
  let [userName, setUserName] = useState("");
  let [age, setAge] = useState("");

  const userNameHandler = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (age === "" && userName === "") {
      alert("Username and age Is empty (Please Enter Some Value)");
      return;
    }
    if (age < 0) {
      alert("Invalid Age");
      return;
    }
    const newUser = {
      userName: userName,
      age: age,
    };
    props.onSubmitHandler(newUser);
    setUserName("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={onsubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={userNameHandler}
          value={userName}
          type="text"
          className="input_control"
        />
        <label htmlFor="years">Age (Years)</label>
        <input
          id="years"
          onChange={ageHandler}
          value={age}
          type="text"
          className="input_control"
        />
        <button className="btn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
