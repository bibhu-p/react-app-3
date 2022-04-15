import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../App.css';

    const CreateAndUpdateModal =(props)=>{
    return(
        <>
        <Modal show={true} scrollable={true} onHide={()=>props.setAddModalVisible(false)} > 
        <Modal.Header closeButton>
        <Modal.Title> {props.action==='add'? 'Add Data':'Edit Data'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
        type="text"
        name="name"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter name..."
        value={props.action ==='add'?props.newUserData.name : props.editUserData.name}
        onChange={(e) => {props.action ==='add'? props.setNewUserData({ ...props.newUserData, name: e.target.value }): props.setEditUserData({...props.editUserData,name:e.target.value})}}
        />
        <input
        type="text"
        name="phone"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter phone number..."
        value={props.action ==='add'?props.newUserData.phone : props.editUserData.phone}
        onChange={(e) => {props.action ==='add'? props.setNewUserData({ ...props.newUserData, phone: e.target.value }):props.setEditUserData({...props.editUserData,phone:e.target.value})}}
        />
        <input
        type="text"
        name="age"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter age"
        value={props.action ==='add'?props.newUserData.age : props.editUserData.age}
        onChange={(e) => {props.action ==='add'? props.setNewUserData({ ...props.newUserData, age: e.target.value }):props.setEditUserData({...props.editUserData, age:e.target.value})}}
        />
        <input
        type="text"
        name="city"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter city"
        value={props.action ==='add'?props.newUserData.address.city : props.editUserData.address.city}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, address:{...props.newUserData.address, city: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, address:{...props.editUserData.address, city: e.target.value }})
        }}
        />
        <input
        type="text"
        className="ms-3 my-2"
        name="state"
        required="required"
        placeholder="Enter state"
        value={props.action ==='add'?props.newUserData.address.state : props.editUserData.address.state}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, address:{...props.newUserData.address, state: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, address:{...props.editUserData.address, state: e.target.value }})
        }}
        />
        <input
        type="text"
        className="ms-3 my-2"
        name="zipCode"
        required="required"
        placeholder="Enter zipCode"
        value={props.action ==='add'?props.newUserData.address.zipCode : props.editUserData.address.zipCode}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, address:{...props.newUserData.address, zipCode: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, address:{...props.editUserData.address, zipCode: e.target.value }})
        }}
        />
        <input
        type="text"
        className="ms-3 my-2"
        name="adhaar"
        required="required"
        placeholder="Enter Adhaar No"
        value={props.action ==='add'?props.newUserData.idProof.adhaar : props.editUserData.idProof.adhaar}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, idProof:{...props.newUserData.idProof, adhaar: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, idProof:{...props.editUserData.idProof, adhaar: e.target.value }})
        }}
        />
        <input
        type="text"
        className="ms-3 my-2"
        name="voterId"
        required="required"
        placeholder="Enter Voter Id"
        value={props.action ==='add'?props.newUserData.idProof.voterId : props.editUserData.idProof.voterId}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, idProof:{...props.newUserData.idProof, voterId: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, idProof:{...props.editUserData.idProof, voterId: e.target.value }})
        }}
        />
        <input
        type="text"
        name="pan"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter PAN No"
        value={props.action ==='add'?props.newUserData.idProof.pan : props.editUserData.idProof.pan}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, idProof:{...props.newUserData.idProof, pan: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, idProof:{...props.editUserData.idProof, pan: e.target.value }})
        }}
        />
        <input
        type="text"
        name="name"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter College Name"
        value={props.action ==='add'?props.newUserData.collegeInfo.name : props.editUserData.collegeInfo.name}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, collegeInfo:{...props.newUserData.collegeInfo, name: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, collegeInfo:{...props.editUserData.collegeInfo, name: e.target.value }})
        }}
        />
        <input
        type="text"
        name="address"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter College Address"
        value={props.action ==='add'?props.newUserData.collegeInfo.address : props.editUserData.collegeInfo.address}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, collegeInfo:{...props.newUserData.collegeInfo, address: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, collegeInfo:{...props.editUserData.collegeInfo, address: e.target.value }})
        }}
        />
        <input
        type="text"
        name="branch"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter Branch"
        value={props.action ==='add'?props.newUserData.collegeInfo.branch : props.editUserData.collegeInfo.branch}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, collegeInfo:{...props.newUserData.collegeInfo, branch: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, collegeInfo:{...props.editUserData.collegeInfo, branch: e.target.value }})
        }}
        />
        <input
        type="text"
        name="course"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter Course"
        value={props.action ==='add'?props.newUserData.collegeInfo.course : props.editUserData.collegeInfo.course}
        onChange={(e) => { props.action ==='add'? props.setNewUserData({ ...props.newUserData, collegeInfo:{...props.newUserData.collegeInfo, course: e.target.value }}): 
        props.setEditUserData({ ...props.editUserData, collegeInfo:{...props.editUserData.collegeInfo, course: e.target.value }})
        }}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.setAddModalVisible(false)}>Close</Button>
          <Button variant="primary" onClick={()=> props.action === 'add' ? props.formSubmit() : props.editSubmit(props.editUserData.index)}>{props.action==='add'? 'Add':'Update'}</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default CreateAndUpdateModal;