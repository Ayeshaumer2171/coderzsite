import React from 'react'
import{Col,Container,Row} from 'react-bootstrap'
import Product2 from './Product2'
import Products from './Products'
export default function Bottom(){
    return(
        <div>
            <Container className='mt-2 p-0'>
                <Row>
                <Col className='pt-15 ' md={3} lg={3}><Products /></Col>
                    <Col md={9} lg={9} className='m-0 w-max mt-5'><Product2 /></Col>
                </Row>
            </Container>
        </div>
    )
}