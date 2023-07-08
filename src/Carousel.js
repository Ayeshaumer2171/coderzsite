 import React , { useState } from 'react';
 import{Col} from 'react-bootstrap';
 import {DupattasApi} from './DupattasApi'
 import Magnifier from "@computeruniverse/react-magnifier"
function Image(props){
    let data=props.data
    let chimg="";
    let notchimg="";
  const [imgsrc,setsrc]=useState(data.src1)
  const [ch1, setch1] = useState(notchimg);
  const [ch2, setch2] = useState(notchimg);
  const [ch3, setch3] = useState(notchimg);
  const [ch4, setch4] = useState(notchimg);
 return (
   
<Col xs={12} sm={12} md={12} lg={6}>
       <div className="flex flex-col justify-items-center">
       {/* <img classname=" d-xs-block d-sm-block d-md-none mt-10 ml-9"  src={imgsrc} /> */}
    <Magnifier
     zoomImg={imgsrc}
     zoomImgHeight={1800}
     zoomImgWidth={1200}
     offsetLeft={20}
    >

       <img classname="d-xs-block d-sm-block d-md-none mt-10 ml-9 " width={700} height={700} src={imgsrc} />
         
    </Magnifier>

       <div  className="flex flex-row justify-around px-5 space-x-4 mt-10 ">
        <img width={70} className={ch1} onClick={()=>{setsrc(data.src1);setch1(chimg); setch2(notchimg); setch3(notchimg); setch4(notchimg)}}   src={data.src1}/>
        <img width={70}className={ch2} onClick={()=>{setsrc(data.src2);setch2(chimg); setch1(notchimg); setch3(notchimg); setch4(notchimg)}}   src={data.src2}/>
        <img width={70}className={ch3} onClick={()=>{setsrc(data.src3);setch3(chimg); setch2(notchimg); setch1(notchimg); setch4(notchimg)}}   src={data.src3}/>
        <img width={70} className={ch4} onClick={()=>{setsrc(data.src4);setch4(chimg); setch2(notchimg); setch3(notchimg); setch1(notchimg)}}  src={data.src4}/>
</div> 
       </div>
    </Col>
  );
}

export default Image;