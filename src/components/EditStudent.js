import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function EditStudent(props) {

  useEffect(()=>{
    setName(props.data.students[params.id].name);
    setEmail(props.data.students[params.id].email);
    setMobile(props.data.students[params.id].mobile);
    setCls(props.data.students[params.id].class);
    
  },[])
  let navigate=useNavigate("");
  let params=useParams();
    console.log(params);

  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [mobile,setMobile]=useState("");
  let [cls,setCls]=useState("");

    
    // console.log(props.data.students[params.id].name)
    
  
  

  function update(){
    let arrupdate={name,email,mobile,"class":cls};
    let newarr=[...props.data.students];
    newarr.splice(params.id,1,arrupdate);
    props.data.setStudents(newarr);
    navigate("/allstudents");
  }
  
  
  return (
    <div>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={name} placeholder="Enter Name" onChange={b=>setName(b.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" value={email} placeholder="Email" onChange={b=>setEmail(b.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicmobile">
    <Form.Label>mobile</Form.Label>
    <Form.Control type="text" value={mobile} placeholder="mobile" onChange={b=>setMobile(b.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicclass">
    <Form.Label>Class</Form.Label>
    <Form.Control type="text" value={cls} placeholder="Class" onChange={b=>setCls(b.target.value)} />
  </Form.Group>
    </Form> 
    
    <Button variant="primary" onClick={update}>
    Update
  </Button>
 
    </div>
  )
}

export default EditStudent
