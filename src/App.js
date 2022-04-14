import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import storage from './storage';

function App() {
  const [storageData, setStorageData] = useState(storage)
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



  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

export default App;
