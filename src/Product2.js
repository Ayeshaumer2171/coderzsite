import React from 'react'
import Hover1 from './Hover1'
import{Col,Container,Row} from 'react-bootstrap'
import {BottomApi} from './BottomApi'
 function Product2(){
    return(
    <Container className='mt-0'>
        <Row>
            {BottomApi.map((category)=>{
                return(
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                    <Hover1  data={category}/>
                    </Col>
                )
            }

            )}
        </Row>
    </Container>
    );
 }
 export default Product2