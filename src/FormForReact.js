
import React from "React"
import { Form ,Button} from "react-bootstrap";

function FormForReact(){
    return(
            <div>
                <Form>
                    <Form.Group>
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label >City</Form.Label>
                    <Form.Control type="text"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label >Mobile Number</Form.Label>
                    <Form.Control type="text"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Button>submit</Button>
                    </Form.Group>
                </Form>
            </div>
    )
}
export default FormForReact;