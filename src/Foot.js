import React from "react";
import { BsFacebook } from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import{Container} from 'react-bootstrap';
import { FootApi } from './FootApi';
function Foot() {
    return (
         <div className="bg-[#f6f6f6] text-center text-sm mt-5">
<div>
<Container>
  {FootApi.map((Apis)=>
  <div className=" border-r-2 border-r-gray-400 pr-4 pl-4 inline-block mb-3  mt-2 media-queries-for-footer">
  <p href={Apis.links} className='className="text-gray-200 m-0  hover:underline hover:text-black hover:cursor link"'>{Apis.title}</p>
  </div>
  )}
  </Container>
</div>
     
        <div className="space-x-4 flex justify-center  mt-5 pb-2  ">
<BsFacebook/>
<BsInstagram/>
<BsTwitter/>
    </div>
</div>
    );
  }
  
  export default Foot;
