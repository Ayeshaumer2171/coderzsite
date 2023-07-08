import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Hover1(data) {
    const [imgsrc,setsrc]=useState(data.data.src1)
    const img=data.data;
  return (
<div>
        
     <Card className='flex flex-col items-center border-0'>
       <Link to='/page3 ' state={{broque:img,productTitle: img.ProductTitle, price: img.Price}}>
 <Card.Img onMouseOver={()=>setsrc(data.data.src2)}  onMouseLeave={()=>setsrc(data.data.src1)}  src={imgsrc} />
          </Link>
        
       <Card.Body>
            <p className='  font-text-sm text-slate-500'>{data.data.ProductTitle}</p>
             <p className='text-center  font-bold font-text-md text-slate-500'>{data.data.Price}</p>
   <p className='text-center  font-text-sm text-slate-500'>{data.data.Name}</p>

         </Card.Body> 

    </Card>
  </div>
  );
}

export default Hover1;