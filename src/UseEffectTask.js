import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
function  UseEffectTask() {
    const [value,setValue]=useState(0)
    const [name,setName]=useState("ali")
    function myFun() {
        setValue(value-1);
       console.log(value);
    }
    function myFun1() {
        setValue(value+1);
        setName("ahmed")
       console.log(name);
    }
    useEffect(()=>{
        console.log("use effect run")
    },[name])
     return(
         <div>
          <label>Value is: {value} </label>
            <Button className="btn btn-success mx-4" onClick={myFun1}>+</Button>
            <Button className="btn btn-success mx-4" onClick={myFun}>-</Button>
            </div>
        );
 
     
}
export default UseEffectTask;