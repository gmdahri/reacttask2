import React from "react"
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState} from "react";
function  MyButton() {
    const [value,setValue]=useState(0)
    function myFun() {
        setValue(value-1);
       console.log(value);
    }
    function myFun1() {
        setValue(value+1);
       console.log(value);
    }
     return(
         <div>
          <label>Value is: {value} </label>
            <Button className="btn btn-success mx-4" onClick={myFun1}>+</Button>
            <Button className="btn btn-success mx-4" onClick={myFun}>-</Button>
            </div>
        );
 
     
}
export default MyButton;