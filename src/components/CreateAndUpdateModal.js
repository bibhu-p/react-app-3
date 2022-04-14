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
        // value={data.name}
        // onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
        />
        <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter email..."
        // value={newUserData.email}
        // onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
        />
        <input
        type="text"
        name="phone"
        required="required"
        placeholder="Enter phone number..."
        // value={newUserData.phone}
        // onChange={(e) => setNewUserData({ ...newUserData, phone: e.target.value })}
        />
        <input
        type="text"
        name="age"
        required="required"
        placeholder="Enter age"
        // value={newUserData.age}
    //     onChange={(e) => setNewUserData({ ...newUserData, age: e.target.value })}
        />
        <input
        type="text"
        name="city"
        required="required"
        placeholder="Enter city"
        // value={newUserData.address.city}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, city: e.target.value }})}
        />
        <input
        type="text"
        name="state"
        required="required"
        placeholder="Enter state"
        // value={newUserData.address.state}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, state: e.target.value} })}
        />
        <input
        type="text"
        name="zipCode"
        required="required"
        placeholder="Enter zipCode"
        // value={newUserData.address.zipCode}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, zipCode: e.target.value} })}
        />
        <input
        type="text"
        name="adhaar"
        required="required"
        placeholder="Enter Adhaar No"
        // value={newUserData.address.zipCode}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, zipCode: e.target.value} })}
        />
        <input
        type="text"
        name="voterId"
        required="required"
        placeholder="Enter Voter Id"
        // value={newUserData.address.zipCode}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, zipCode: e.target.value} })}
        />
        <input
        type="text"
        name="pan"
        required="required"
        placeholder="Enter PAN No"
        // value={newUserData.address.zipCode}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, zipCode: e.target.value} })}
        />
        <input
        type="text"
        name="name"
        required="required"
        placeholder="Enter College Name"
        // value={newUserData.address.zipCode}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, zipCode: e.target.value} })}
        />
        <input
        type="text"
        name="location"
        required="required"
        placeholder="Enter College Address"
        // value={newUserData.address.zipCode}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, zipCode: e.target.value} })}
        />
        <input
        type="text"
        name="branch"
        required="required"
        placeholder="Enter Branch"
        // value={newUserData.address.zipCode}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, zipCode: e.target.value} })}
        />
        <input
        type="text"
        name="course"
        required="required"
        placeholder="Enter Course"
        // value={newUserData.address.zipCode}
        // onChange={(e) => setNewUserData({ ...newUserData, address:{...newUserData.address, zipCode: e.target.value} })}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.setAddModalVisible(false)}>Close</Button>
          <Button variant="primary">ADD</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default CreateAndUpdateModal;