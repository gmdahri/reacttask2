import React, { useState } from "react";


function Hoc(Original){
   function NewComponent() {
            const [count,setCount]=useState(0);
            const increment=()=>{
                setCount(count+1)
            }
           return <Original count={count} increment={increment} name="hi hello"></Original>
       
   }
   return NewComponent;
}
export default Hoc;