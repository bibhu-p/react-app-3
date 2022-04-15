// Imports
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import storage from './storage';
import ViewModal from './components/ViewModal';
import CreateAndUpdateModal from './components/CreateAndUpdateModal';
import TableView from './components/Table';

function App() {
  const [storageData, setStorageData] = useState(storage);
  const [singleUser, setSingleUser] = useState({});
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [action, setAction] = useState('add');


  const [newUserData, setNewUserData] = useState(
    {
      name: "",
      age: '',
      phone: '',
      address: {
        city: "",
        state: "",
        zipCode: '',
      },
      idProof: {
        adhaar: '',
        voterId: '',
        pan: ""
      },
      collegeInfo: {
        name: "",
        address: "",
        branch: "",
        course: ""
      }
    }
  )

  const [editUserData, setEditUserData] = useState(
    {
      name: "",
      age: '',
      phone: '',
      address: {
        city: "",
        state: "",
        zipCode: '',
      },
      idProof: {
        adhaar: '',
        voterId: '',
        pan: ""
      },
      collegeInfo: {
        name: "",
        address: "",
        branch: "",
        course: ""
      }
    }
  )

  // view modal
  const viewAllData =(i)=>{
    let singleData = storageData[i];
    setSingleUser(singleData);
    setViewModalVisible(true);
  }

  // Input field Clear func
  const clear = () => {
    setNewUserData({ ...newUserData, name: '', email: "", phone: "", age: "",
    address: {
      city:"",
      state:"", 
      zipCode:""},
    idProof:{
      adhaar: '',
      voterId: '',
      pan: ""},
    collegeInfo: {
      name: "",
      address: "",
      branch: "",
      course: ""
    }
    
    })
  }

  // Create Func
  const formSubmit = (event) => {
    const newUsers = storageData
    newUsers.push(newUserData);
    setStorageData(newUsers);
    setAddModalVisible(false);
    clear();
};

  // view user data to edit
  const viewData =(i)=>{
    setAction('edit');
    setAddModalVisible(true);
    const usersData = [...storage];
    const userData = usersData[i];
    setEditUserData({
      name: userData.name,
      phone: userData.phone,
      age: userData.age,
      address:{
        city: userData.address.city,
        state: userData.address.state,
        zipCode :userData.address.zipCode
      },
      idProof: {
        adhaar: userData.idProof.adhaar,
        voterId: userData.idProof.voterId,
        pan: userData.idProof.pan,
      },
      collegeInfo: {
        name: userData.collegeInfo.name,
        address:userData.collegeInfo.address,
        branch: userData.collegeInfo.branch,
        course:userData.collegeInfo.course,
      },
      index : i,
    });
  }

  // Update Func
  const editSubmit = (i) => {
    const editUser = editUserData;
    const oldData = storageData;
    oldData.splice(i,1,editUser);
    setAddModalVisible(false);
    clear();
};
  // User Create Modal 
  const createModal = ()=>{
    setAction('add')
    setAddModalVisible(true);
  }
  
  // Delete Func
  const onDelete = (i) => {
    const oldUsers = [...storage];
    oldUsers.splice(i, 1);
    setStorageData(oldUsers);
  };


  return (
    <>
      <h1>Home Page</h1>
        <TableView 
          data={storageData}
          viewAllData={viewAllData}
          viewData={viewData}
          onDelete={onDelete}
          />
      <Button style={{"backgroundColor":'#7ea2e9',"color":"black","border":"none"}} onClick={createModal}>Add User</Button>

      {/* <ViewModal /> */}
     {viewModalVisible && <ViewModal data ={singleUser}
     setViewModalVisible = {setViewModalVisible}
     />}

      {/* <CreateAndUpdateModal /> */}
    {addModalVisible && <CreateAndUpdateModal 
     setAddModalVisible = {setAddModalVisible}
     formSubmit = {formSubmit}
     newUserData = {newUserData}
     editUserData = {editUserData}
     setNewUserData = {setNewUserData}
     setEditUserData = {setEditUserData}
     action = {action}
     editSubmit = {editSubmit}
    />}
    </>
  );
}
export default App;