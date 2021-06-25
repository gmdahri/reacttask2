import React, { useReducer,useContext } from "react"
import { Reducer } from "react"
import { Form,Button } from "react-bootstrap";
import { MyContext } from "./MyContext";
import LogoutReducer from "./LogoutReducer";

function LoginReducer(){
    const reducer=(state,action)=>{
        switch(action){
            case "log in":
                return true;
            case "log out":
                return false;
        }
    }
    const [state, dispatch]=useReducer(reducer,false)
    console.log(state)

    return(
        <div class="container">
            <h1>logged in</h1>
        <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="d-flex flex-start">Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email"  id='namebox' />
          <Form.Text className="text-muted d-flex flex-start">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="d-flex flex-start">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={()=>dispatch("log in")} className="my-4 d-flex flex-end" >
          login

        </Button>
        <Button variant="primary" type="button" className="my-4 d-flex flex-end" >
          ShowTable
        </Button>
      </Form>
      <MyContext.Provider value={{state,dispatch}}>
      <div className="container">
        {state?<LogoutReducer/>:null}
        </div>
        </MyContext.Provider>

      </div>

)
}
export default LoginReducer;