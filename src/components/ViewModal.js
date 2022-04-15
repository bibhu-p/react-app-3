import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../App.css';


    const ViewModal =(props)=>{
    return(
        <>
        <Modal show={true} scrollable={true} onHide={()=>props.setViewModalVisible(false)}> 
        <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <span>Name</span>
        <input className="ms-3 my-2" disabled value={props.data.name}/>
        <br/>
        <span>Phone</span>
        <input className="ms-3 my-2" disabled value={props.data.phone}/>
        <br/>
        <span>Age</span>
        <input className="ms-3 my-2" disabled value={props.data.age}/>
        <br/>
        <span>City</span>
        <input className="ms-3 my-2" disabled value={props.data.address.city}/>
        <br/>
        <span>State</span>
        <input className="ms-3 my-2" disabled value={props.data.address.state}/>
        <br/>
        <span>ZipCode</span>
        <input className="ms-3 my-2" disabled value={props.data.address.zipCode}/>
        <br/>
        <span>Adhaar</span>
        <input className="ms-3 my-2" disabled value={props.data.idProof.adhaar}/>
        <br/>
        <span>Voter Id</span>
        <input className="ms-3 my-2" disabled value={props.data.idProof.voterId}/>
        <br/>
        <span>PAN Id</span>
        <input className="ms-3 my-2" disabled value={props.data.idProof.pan}/>
        <br/>
        <span>College Name</span>
        <input className="ms-3 my-2" disabled value={props.data.collegeInfo.name}/>
        <br/>
        <span>College Address</span>
        <input className="ms-3 my-2" disabled value={props.data.collegeInfo.address}/>
        <br/>
        <span>Branch</span>
        <input className="ms-3 my-2" disabled value={props.data.collegeInfo.branch}/>
        <br/>
        <span>Course</span>
        <input className="ms-3 my-2" disabled value={props.data.collegeInfo.course}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.setViewModalVisible(false)}>Close</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default ViewModal;