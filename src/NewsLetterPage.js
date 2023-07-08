import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

export default function NewsLetterPage() {
  return (
    <div>

      <div className='bg-gray-400 h-36 text-center mt-3'><h2 className='pt-5'>STYLE GUIDE</h2></div>
      <div className='text-center mt-5'><h5>A LOOK AT WHAT'S NEW IN FASHION. YOUR ULTIMATE STYLE GUIDE PAGE!</h5></div>
      <Row className='mt-5 m-0 '>

        <Col xs={12} md={12} lg={12} xl={12} xxl={12} >
          <img className='w-full' src="https://cdn.shopify.com/s/files/1/2277/5269/files/Style_guide_banner_main_-1.jpg?v=1663764757 " alt="" />
        </Col>
      </Row>
      <div className='mt-5 pl-36'><h2><b>RUBY RED</b></h2></div>
      <Row className='mt-5 m-0'>~

        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="flex flex-row justify-center" >
          <img className='w-full' src="https://cdn.shopify.com/s/files/1/2277/5269/files/311676567_1914952025341650_3656793912805375515_n.jpg?v=1667640906" alt="" />
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
          <h1>GLIMMERY GOWNS</h1>
          <p className='text-xl'>Celestially crafted with exquisite thread and tilla work on a zinc canvas makes this stellar outfit. Symbolize your style in this eye-catching ensemble in a mesmerizing dark black hue. This three piece is perfect for qawali nights or your friend's valima. Straight sleek hair and dewy makeup with shimmery silver heels will amp up the whole look.</p>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
          <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/271270188_156646883367034_1979716409944154405_n.jpg?v=1667640959" alt="" />
        </Col>
      </Row>



      <Row className='mt-3'>
        <Col xs={12} md={8}>
          <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/311270082_1026310244707347_7239514526168205967_n.jpg?v=1667640988" alt="" />
        </Col>
        <Col xs={6} md={4}>
          <h1>VIVIDLY VELVET</h1>
          <p className='text-xl' >Traditional dresses are always in trend. They are classic and timeless. Radiate poise and perfection in this stunning black look, embellished to perfection. Rendered on rich fabric and intricately embroidered velvet canvas. This beautifully embellished dupatta and silk pants, radiates the ultimate glow that you need for the upcoming festivities.</p>
        </Col>
      </Row>

    </div>
  )
}