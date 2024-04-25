import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import Card from './components/Ui/Card';
import './App.css';
import { useState } from 'react';


function App() {

  const userArr = [
    {
      id : 1,
      userName : "Rohan",
      age : "25"
    },
    {
      id : 2,
      userName : "Amit",
      age : "28"
    },
    {
      id : 3,
      userName : "Santosh",
      age : "28"
    }
  ]

  let [userdata , setUserdata] = useState(userArr);

  const userAddHandler = (formdata) => {
    setUserdata((oldData)=>{
      return [...oldData, formdata]
    })
  }
  return (
   <div className='container'>
    <Card>
      <AddUser onSubmitHandler = {userAddHandler}></AddUser>
    </Card>
    <Card>
      <UsersList userData = {userdata}></UsersList>
    </Card>
   </div>
  );
}

export default App;
