import React ,{useEffect, useState} from "react";
function Effect(){
  
    const[count,setCount]=useState(0);
    useEffect(()=>{
console.log('hello');
    });
    console.log('hello guz');
    
    return(
        <h1>{count}</h1>,
        <button className="btn"onClick={()=>{
            setCount( count + 1);
           }} >click it</button>
    )
}
export default Effect;