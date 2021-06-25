import React from "react"
import {Form} from "react-bootstrap"
import {Col} from "react-bootstrap"
import { table } from "react-bootstrap"
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import Table2 from "./Table2"

function Table(){
    const [flag, setflag]=useState(0);
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [user,setUser]=useState([])
    function ChangeName(event){
        setName(event.target.value)
        
       
    }
    function ChangePass(event){
        setPassword(event.target.value)
        
       
    }
    const arr=user;
    function submitBtn(){
        const ob={name,password}
       
        arr.push(ob)
        setUser(arr)
        
        setName("")
    
        console.log(arr)
    }
    const showTable=()=>{
        setflag(1);
    }
   if(flag==0){
    return (
        <div className="container my-4">
        <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="d-flex flex-start">Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={ChangeName} id='namebox' value={name}/>
          <Form.Text className="text-muted d-flex flex-start">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="d-flex flex-start">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={ChangePass}/>
        </Form.Group>
        
        <Button variant="primary" type="button" className="my-4 d-flex flex-end" onClick={submitBtn}>
          Submit
        </Button>
        <Button variant="primary" type="button" className="my-4 d-flex flex-end" onClick={showTable}>
          ShowTable
        </Button>
      </Form>
        
      </div>
      
    )}
    else if(flag==1){
        return (
            <Table2 user={user}></Table2>
        )
    }
}
export default Table;