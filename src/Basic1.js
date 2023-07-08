import React, { useState } from 'react';
import InputFields from './InputFields';
import { UnstichedApi } from "./UnstichedApi"

 function Basic1(props){
   const img=props.picture;
   const [imgsrc,setsrc]=useState(img.src1);
    return(
       <div className=' basic bg-slate-100 h-full'>
        <div className='pt-10 pl-5 flex'>
        <div className='relative w-10 '>
            <div className='absolute '> <img width={50} className="rounded-md" src={imgsrc} /> </div>
            <div className='absolute bg-blue-100 h-5  w-5 -top-2 -right-2 rounded-5 text-center'>{props.quant}</div>
         </div>
    <div className='ml-3 font-bold'>{img.ProductTitle }</div>
    <div className='ml-16 mt-3'>{img.Price}</div>
    </div>
    <hr className='m-3 '/>
    <div className='flex mb-2 w-96 flex justify-between'>

<InputFields className="ml-10 h-10 w-72 pl-2 border border-black"  name="Code" />

<button className='bg-slate-400 ml-5 p-2 rounded-2 text-white font-bold'>Apply</button>
</div>
<hr className='m-3'/>
<div className='flex justify-between'>
         <p className='ml-10 mt-2 '>Subtotal</p><p className=' mt-2 font-bold'>{img.Price}</p>
        </div>
        <div className='flex justify-between'>
         <p className='ml-10 mt-2 '>Shipping</p><p className=' mt-2 text-sm'>Calculated at next step</p>
        </div>
        <hr className='m-3'/>
        <div className='flex justify-between'>
         <p className='ml-10 mt-2  '>Total</p><p className=' mt-2 text-3xl '>{props.Price}</p>
        </div>
     </div> 

    )
}
export default Basic1;