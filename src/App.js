import './App.css';
import React, { useState } from 'react';
import storage from './storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table} from 'react-bootstrap';

import ViewModal from './components/ViewModal';
import CreateAndUpdateModal from './components/CreateAndUpdateModal';
import TableView from './components/Table';

function App() {
  const [storageData, setStorageData] = useState(storage);
  const [singleUser, setSingleUser] = useState({});
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

  const [newUserData, setNewUserData] = useState(
    {
      name: "",
      age: 0,
      phone: 0,
      address: {
        city: "",
        state: "",
        zipCode: 0,
      },
      idProof: {
        adhaar: 0,
        voterId: 0,
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
      age: 0,
      phone: 0,
      address: {
        city: "",
        state: "",
        zipCode: 0,
      },
      idProof: {
        adhaar: 0,
        voterId: 0,
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

  const viewAllData =(i)=>{
    let singleData = storageData[i];
    setSingleUser(singleData);
    setViewModalVisible(true);
  }

  // view data
  const viewData =(i)=>{

  }
  // 
  const createModal = ()=>{
    setAddModalVisible(true);
  }
  
  // Delete Func
  const onDelete = (i) => {
     console.log("Delete >>>>>>>>>>>>>>>",typeof(i));
    const oldUsers = [...storage];
    // const index = parseInt(i);
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

      {/* <CreateAndUpdateModal /> */}
      <Button style={{"backgroundColor":'#7ea2e9',"color":"black","border":"none"}} onClick={createModal}>Add User</Button>
     {viewModalVisible && <ViewModal data ={singleUser}
     setViewModalVisible = {setViewModalVisible}
     />}
    {addModalVisible && <CreateAndUpdateModal 
     setAddModalVisible = {setAddModalVisible}
     />}
    </>
  );
}

export default App;
