import React from "react";
import { table } from "react-bootstrap"
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
function Table2({user}) {
    return(
        <div>
            <table class="table table-bordered">
            <thead>
                <tr>
                    <td>
                        name
                    </td>
                    <td>
                        password
                    </td>
                </tr>
            </thead>
            <tbody>
                {user.map((item)=>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.password}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}
export default Table2;