import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Hoc from "./Hoc";

function IncrementOnHover(props){
    console.log(props)
    
    return(
        <div>
            <h1 onMouseOver={()=>props.increment()}> + {props.count} {props.name} </h1>
        </div>
    )
}
export default Hoc(IncrementOnHover);