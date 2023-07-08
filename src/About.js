import React from 'react'
import { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function About(){
//useState
 // const[img,setImg]=useState('https://cdn.shopify.com/s/files/1/2277/5269/files/567_550x.jpg?v=1667801770')
 
//useEffect
const[num,setNum]=useState(0);

useEffect(()=>{
  alert('i m clicked')
})

  return (

 //  <img onMouseOver={()=>setImg('https://cdn.shopify.com/s/files/1/2277/5269/files/fdgfg_550x.jpg?v=1668429601')} onMouseLeave={()=>setImg('https://cdn.shopify.com/s/files/1/2277/5269/files/567_550x.jpg?v=1667801770')}  src={img}/>
  

<button onClick={()=>{setNum(num+1)} } >click me{num} </button>


  );
};
