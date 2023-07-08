import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <Carousel indicators={false}
              controls={false}
     className='header bg-fixed'>
      <Carousel.Item interval={1000}>
       <h4 className=' text-base'>free shipping in here</h4>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <h4 className='  text-base'>for any query contact us</h4>
      </Carousel.Item>
      <Carousel.Item>
      <h4 className='  text-base'>open the link</h4>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;