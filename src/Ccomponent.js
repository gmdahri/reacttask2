import { Button } from 'react-bootstrap';
import React from 'react'
import { MyContext } from './MyContext';

class Ccomponent extends React.Component{
    render(){
        return (
            <div className="app border">
                
                <h2>class Component</h2>
                <MyContext.Consumer>
                    {({value,setValue})=>{
                        return <div>
                            <h1>{value}</h1>
                            <Button onClick={()=>(setValue(value+1))}>increment</Button>
                            </div>
                    }
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
export default Ccomponent;