import React, { useReducer,useContext } from "react"
import { Reducer } from "react"
import { Form,Button } from "react-bootstrap";
import { MyContext } from "./MyContext";

function LogoutReducer(){
    const {state,dispatch}=useContext(MyContext);
return(
    <div className="container bg-secondary">
        <h1>hello</h1>
        <Button onClick={()=>{dispatch("log out")}}>logout</Button>
    </div>
)
}
export default LogoutReducer;