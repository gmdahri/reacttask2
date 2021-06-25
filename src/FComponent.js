
import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import {Button} from 'react-bootstrap'

const FComponent=()=>{
const {value,setValue}=useContext(MyContext);




    return(
        <div className="app border">

            <h2>function component</h2>
            
            <h3>{value}</h3>
            <Button onClick={()=>setValue(value+1)}> increament</Button>
           
        </div>
    )
}
export default FComponent;