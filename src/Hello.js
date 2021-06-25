import React from 'react'

class Hello extends React.Component{
    render(){
    return (
        <div>
            <h1>hello world fine..{this.props.items}</h1>
          
            </div>
    );
}
}
export default Hello;