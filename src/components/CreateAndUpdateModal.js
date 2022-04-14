import React from 'react';
import {Modal, Button} from 'react-bootstrap';

    const CreateAndUpdateModal =(props)=>{
    // console.log(props.data);
    return(
        <>
        <Modal show={true} onHide={()=>props.setAddModalVisible(false)} > 
        <Modal.Header closeButton>
        <Modal.Title> Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
        type="text"
        name="name"
        required="required"
        placeholder="Enter name..."
        value={props.newUserData.name}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, name: e.target.value })}
        />
        <input
        type="text"
        name="phone"
        required="required"
        placeholder="Enter phone number..."
        value={props.newUserData.phone}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, phone: e.target.value })}
        />
        <input
        type="text"
        name="age"
        required="required"
        placeholder="Enter age"
        value={props.newUserData.age}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, age: e.target.value })}
        />
        <input
        type="text"
        name="city"
        required="required"
        placeholder="Enter city"
        value={props.newUserData.address.city}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, address:{...props.newUserData.address, city: e.target.value }})}
        />
        <input
        type="text"
        name="state"
        required="required"
        placeholder="Enter state"
        value={props.newUserData.address.state}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, address:{...props.newUserData.address, state: e.target.value} })}
        />
        <input
        type="text"
        name="zipCode"
        required="required"
        placeholder="Enter zipCode"
        value={props.newUserData.address.zipCode}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, address:{...props.newUserData.address, zipCode: e.target.value} })}
        />
        <input
        type="text"
        name="adhaar"
        required="required"
        placeholder="Enter Adhaar No"
        value={props.newUserData.idProof.adhaar}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, idProof:{...props.newUserData.idProof, adhaar: e.target.value} })}
        />
        <input
        type="text"
        name="voterId"
        required="required"
        placeholder="Enter Voter Id"
        value={props.newUserData.idProof.voterId}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, idProof:{...props.newUserData.idProof, voterId: e.target.value} })}
        />
        <input
        type="text"
        name="pan"
        required="required"
        placeholder="Enter PAN No"
        value={props.newUserData.idProof.pan}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, idProof:{...props.newUserData.idProof, pan: e.target.value} })}
        />
        <input
        type="text"
        name="name"
        required="required"
        placeholder="Enter College Name"
        value={props.newUserData.collegeInfo.name}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, collegeInfo:{...props.newUserData.collegeInfo, name: e.target.value} })}
        />
        <input
        type="text"
        name="address"
        required="required"
        placeholder="Enter College Address"
        value={props.newUserData.collegeInfo.address}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, collegeInfo:{...props.newUserData.collegeInfo, address: e.target.value} })}
        />
        <input
        type="text"
        name="branch"
        required="required"
        placeholder="Enter Branch"
        value={props.newUserData.collegeInfo.branch}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, collegeInfo:{...props.newUserData.collegeInfo, branch: e.target.value} })}
        />
        <input
        type="text"
        name="course"
        required="required"
        placeholder="Enter Course"
        value={props.newUserData.collegeInfo.course}
        onChange={(e) => props.setNewUserData({ ...props.newUserData, collegeInfo:{...props.newUserData.collegeInfo, course: e.target.value} })}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.setAddModalVisible(false)}>Close</Button>
          <Button variant="primary" onClick={()=>props.formSubmit()}>ADD</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default CreateAndUpdateModal;