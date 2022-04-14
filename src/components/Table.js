import React from 'react'
import { Button, Table} from 'react-bootstrap';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";

const TableView = (props) => {
  return (
    <Table bordered >
        <thead>
          <tr>
            <th>SL NO</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Age</th>
            <th>City</th>
            <th>State</th>
            <th>zipCode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, i) =>
            <tr>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.age}</td>
              <td>{data.address.city}</td>
              <td>{data.address.state}</td>
              <td>{data.address.zipCode}</td>

              <td>
              <Button style={{"backgroundColor":"#b8ccf3", "border":"none"}} onClick={()=>props.viewAllData(i)} ><BsFillEyeFill color='black' /></Button>
              <Button style={{"backgroundColor":"#b8ccf3", "border":"none","marginLeft":"10px"}} onClick={()=>props.viewData(i)} ><BiEditAlt color='black' /></Button>
              <Button style={{"backgroundColor":"#b8ccf3", "border":"none", "marginLeft":"10px"}}  onClick={()=>props.onDelete(i)}><RiDeleteBinLine color='black' /></Button></td>
            </tr>
          )}
        </tbody>
      </Table>
  )
}

export default TableView;