import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import Image from './Carousel'
import Data from './Data'
export default function Broque() {
  let Location=useLocation()
  let data=Location.state.broque;



  return (
    <div>
        <Container className='mt-5 p-0'>
 <Row>
    <Col md={6}  lg={6} ><Image data={data} /></Col>
    <Col md={6}  lg={6}><Data     data={data} productTitle={data.ProductTitle} price={data.Price}  /></Col>
 </Row>
        </Container>
    </div>
  )
 }
