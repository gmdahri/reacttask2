import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Hoc from "./Hoc";


function HigherOrderComponents(props){
   console.log(props);
    return(
        <div>
            {/* <Button variant="success" onClick={()=>props.increment()}>+ {props.count}</Button> */}
            <Button variant="success" onClick={()=>props.increment()} >increment  {props.count} </Button>
        </div>
    )
}
export default Hoc(HigherOrderComponents);
