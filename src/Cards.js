import Button from 'react-bootstrap/Button';
import{Col,Container,Row} from 'react-bootstrap';
import { ProductsApis } from './ProductApis';
import {Link} from 'react-router-dom'
function Cards() {
  return (
    <div>
      <Container className='product mt-5 '>
<Row>
  {ProductsApis.map((Apis)=>
  <Col className='text-center flex flex-col ' sm={12} md={6} lg={4} xl={4} xxl={4} >
 <Link  to={Apis.links}><img src={Apis.src} alt=''/></Link>
  <p class='font-bold text-slate-500 pt-3'>{Apis.title}</p>
 <Link to={Apis.links} className='no-underline text-black'> <p class=' text-slate-500'>{Apis.name}</p></Link>
  </Col>

  )}
</Row>

      </Container>
</div>
   
  );
}

export default Cards;