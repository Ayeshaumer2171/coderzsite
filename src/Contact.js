import React, { useState } from 'react'
import { DupattasApi } from './DupattasApi'
import{Col} from 'react-bootstrap';

export default function Contact(props) {
    // let data=DupattasApi[0]
    // const [img,setImg]=useState(data.src1)
 
  return (
    <h2>hello world! {props.name}</h2>

        // <Col xs={12} sm={12} md={12} lg={6} >

        //     <div className="flex flex-col justify-items-center" >
        // <img src={img} width={500} height={700} className="m-10 "  />

        // <div className="flex flex-row justify-around px-5 space-x-4 " >
        //     <img width={70}  src={data.src1} onClick={()=>{setImg(data.src1)}} />
        //     <img  width={70}   src={data.src2} onClick={()=>{setImg(data.src2)}}  />
        //     <img  width={70}  src={data.src3} onClick={()=>{setImg(data.src3)}}  /> 
        // </div>
        
        // </div>
        // </Col>
  )
}
