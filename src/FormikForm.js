import React from "react";
import { Formik, useFormik } from "formik";
import { Button,Form } from "react-bootstrap";
function FormikForm(){
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        onSubmit:values=>{
            
            console.log(formik.values);
        },
        validate:values=>{
            let errors={};
            if(!values.email){
                errors.email="required";
            }
            if(!values.password){
                errors.password="required";
            }
            return errors;
        }

    });
    return(
        <div className="container">
            <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="d-flex flex-start">Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={formik.handleChange} name="email" id='namebox' onBlur={formik.handleBlur} value={formik.values.email}/>
        {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
          <Form.Text className="text-muted d-flex flex-start">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="d-flex flex-start">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}/>
          {formik.touched.password && formik.errors.password?<div>{formik.errors.password}</div>:null}

        </Form.Group>
        
        <Button variant="primary" type="submit" className="my-4 d-flex flex-end" >
          Submit
        </Button>
        <Button variant="primary" type="submit" className="my-4 d-flex flex-end" >
          ShowTable
        </Button>
      </Form>
        </div>
    )
}
export default FormikForm;