import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Basic from './Basic';
import Basic1 from './Basic1';

 export default function Broque2(){
   const Location=useLocation()
   const quantity=Location.state.Quantity
   const img=Location.state.pics
  return(
   <div>
      <Row>
          <Col lg={7}><Basic /></Col> 
     <Col md={5}><Basic1 quant={quantity} picture={img}/></Col>  
        </Row>
        </div>
 )
 }