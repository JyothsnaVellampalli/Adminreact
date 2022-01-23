import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function AddStudents(props) {
  let navigate=useNavigate("");
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [mobile,setMobile]=useState("");
  let [cls,setCls]=useState("");

  function handleSubmit(){
   
    let newdata={name,email,mobile,"class":cls};
    let newArr=[...props.data.students];
    console.log(newdata);
    console.log(newArr);
    newArr.push(newdata);
    props.data.setStudents(newArr);
    navigate("/allstudents");
  }
  return <>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={b=>setName(b.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Email" onChange={b=>setEmail(b.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicmobile">
    <Form.Label>mobile</Form.Label>
    <Form.Control type="text" placeholder="mobile" onChange={b=>setMobile(b.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicclass">
    <Form.Label>Class</Form.Label>
    <Form.Control type="text" placeholder="Class" onChange={b=>setCls(b.target.value)} />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
  </>
}

export default AddStudents

