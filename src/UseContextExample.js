import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import FComponent from './FComponent';
import Ccomponent from './Ccomponent';
import { MyContext } from "./MyContext";

function UseContextExample() {
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
            <MyContext.Provider value={{value,setValue}}>
                 <div className='my-4'>
                 </div>
                 <div className='my-4'>
                     <Ccomponent></Ccomponent>
                 </div>
             </MyContext.Provider>
            </div>
        );
 
     
}
export default UseContextExample;