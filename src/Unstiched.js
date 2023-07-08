import React from 'react'
import{Col,Container,Row} from 'react-bootstrap'
import Product3 from './Product3'
import Products from './Products'
export default function Unstiched(){
    return(
        <div>
            <Container className='mt-2 p-0 '>
                <Row>
                   <Col className=' ' md={3} lg={3}><Products /> </Col>
                    <Col md={9} lg={9} className='m-0 w-max mt-5'><Product3 /></Col>
                </Row>
            </Container>
        </div>
    )
}