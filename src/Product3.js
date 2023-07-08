// import Hover1 from './Hover1'
// import{Col,Container,Row} from 'react-bootstrap'
// import {UnstichedApi} from './UnstichedApi'
//  function Product3(){
//     return(
//     <Container className='mt-0 '>
//         <Row>
            
//             {UnstichedApi.map((Api)=>{
//                 return(
//                     <Col xs={12}md={6} lg={4} xl={4} xxl={4}  >
//                         <Hover1 data={Api} />
//                     </Col>
//                 )
//             }
//             )
//             }
           
//         </Row>
//     </Container>
//     );
//  }
//  export default Product3
import React from 'react';
import Hover1 from './Hover1'
import {UnstichedApi} from './UnstichedApi';
import { Col, Container, Row } from 'react-bootstrap'

function Product3() {
 // var selected = Dupattas;
  return (
    <Container className='mt-0'>
      <Row>
        {UnstichedApi.map((catagory) => {
          return (
            <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} >
              <Hover1 data={catagory} />
            </Col>)
        })}
      </Row>
    </Container>
  );
}

export default Product3;