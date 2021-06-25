import { useFormik } from "formik";
import React from "react";
import { Form ,Button} from "react-bootstrap";

function FormFormik(){
    const Formik=useFormik({
        initialValues:{
            name:"",
            city:"",
            mob:""
        },
        onSubmit:values=>{
            console.log(values);
        },
        validate:values=>{
            let error={};
            if(!values.name) error.name="Name Required"
            if(!values.city) error.city="City Required"
            if(!values.mob) error.mob="Mobile Number Required"
            return error;
        }

    })
    console.log(Formik.errors);
    return(
            <div className="container app border col-3 my-4">
                <Form onSubmit={Formik.handleSubmit}>
                    <Form.Group>
                    <Form.Label className="d-flex justify-content-start">Name</Form.Label>
                    <Form.Control type="text" value={Formik.values.name} name="name" onChange={Formik.handleChange} onBlur={Formik.handleBlur} ></Form.Control>
                    {Formik.touched.name&&Formik.errors.name?<h6>Name Required</h6>:null}
                    </Form.Group>

                    <Form.Group>
                    <Form.Label className="d-flex justify-content-start">City</Form.Label>
                    <Form.Control type="text" value={Formik.values.city} name="city" onChange={Formik.handleChange} onBlur={Formik.handleBlur}></Form.Control>
                    {Formik.touched.city&&Formik.errors.name?<h6>City Required</h6>:null}

                    </Form.Group>

                    <Form.Group>
                    <Form.Label className="d-flex justify-content-start">Mobile Number</Form.Label>
                    <Form.Control type="text" value={Formik.values.mob} name="mob" onChange={Formik.handleChange} onBlur={Formik.handleBlur}></Form.Control>
                    {Formik.touched.mob&&Formik.errors.name?<h6>MobileNumber Required</h6>:null}

                    </Form.Group>

                    <Form.Group>
                        <Button className="d-flex justify-content-end my-4" type="submit">submit</Button>
                    </Form.Group>
                </Form>
            </div>
    )
}
export default FormFormik;