import React from "react";
import About from "./About";
import Main2 from "./Main2"
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
function Main(){
    return(
        <div className="d-flex flex-start">
            <Router>
            <ul>
                
                <li><Link to="/main2">Main</Link></li>
                <li><Link to="/about">ABout</Link></li>
            </ul>
            <Switch>
                <Route path="/main2" >
                    <Main2></Main2>
                </Route>
                <Route path="/about">
                    <About></About>
                </Route>
            </Switch>
            </Router>
        </div>
        
    )   
}
export default Main;