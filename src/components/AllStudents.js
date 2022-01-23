import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function AllStudents(props) {
  //console.log(props);
  function DeleteStudent(i){
    let newdata=[...props.data.students];
    newdata.splice(i,1);
    props.data.setStudents(newdata);
  }
  return<>
   <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>email</th>
        <th>mobile</th>
        <th>class</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.students.map((b,i)=>{
          return <tr key={i}>
            <td>{i+1}</td>
            <td>{b.name}</td>
            <td>{b.email}</td>
            <td>{b.mobile}</td>
            <td>{b.class}</td>
            <td><Button variant="primary" onClick={()=>DeleteStudent(i)}>DELETE</Button></td>
            <Link to={`/editstudent/${i}`}>
            <td><Button variant="primary">EDIT</Button></td>
            </Link>
           
          </tr>
        })
      }
    </tbody>
  </Table>
  </>
}

export default AllStudents
