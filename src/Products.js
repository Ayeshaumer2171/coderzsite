import Button from 'react-bootstrap/Button';
import{Col,Container,Row} from 'react-bootstrap';
import { ProductsApis } from './ProductApis';
import Accordion from 'react-bootstrap/Accordion';

function Products() {
  return (
   
    <div>
      <Container className='sticky product mt-5 '>
<Row>
  <Col>
  <Accordion>
      <Accordion.Item eventKey="1" className='  border-transparent'>
        <Accordion.Header className='border-transparent'>Product type</Accordion.Header>
        <Accordion.Body>
       <input type='checkbox'  />UNSTICHED<br/>
       <input type='checkbox'  />STICHED<br />
       <input type='checkbox'  />UNSTICHED CHIFFON<br/>
       <input type='checkbox'  />UNSTICHED VELVET<br />
       <input type='checkbox'  />VELVET
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
        <input type='checkbox'  />from<br />
       <input type='checkbox'  />To
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
        <input type='checkbox'  />XS<br/>
       <input type='checkbox'  />SM<br />
       <input type='checkbox'  />MEDIUM<br/>
       <input type='checkbox'  />LG<br />
       <input type='checkbox'  />XLG
       <input type='checkbox'  />CUSTOM SIZE<br/>
       <input type='checkbox'  />default<br />
       <input type='checkbox'  />S<br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item  eventKey="0">
        <Accordion.Header>Fabric type</Accordion.Header>
        <Accordion.Body>
        <input type='checkbox'  />CHIFFON (4)<br/>
       <input type='checkbox'  />Chiffon (1)<br />
       <input type='checkbox'  />JACQUARD (3)<br/>
       <input type='checkbox'  />KHADDAR (2)<br />
       <input type='checkbox'  />LAWN (4)<br />
       <input type='checkbox'  />NET (7)<br/>
       <input type='checkbox'  />KHADDAR (2)<br />
       <input type='checkbox'  />ORGANZA (2)<br/>
       <input type='checkbox'  />VELVET (18)<br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Pieces</Accordion.Header>
        <Accordion.Body>
        <input type='checkbox'  />2 (1)<br/>
       <input type='checkbox'  />3 (9)<br />
       <input type='checkbox'  />2 PIECE (1)<br/>
       <input type='checkbox'  />2 Piece (2)<br />
       <input type='checkbox'  />3 Piece (15)<br/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Col>

  {/* {ProductsApis.map((Apis)=>
  <Col className='text-center flex flex-col'>
  <img src={Apis.src} alt=''/>
  <p class='font-bold text-slate-500 pt-3'>{Apis.title}</p>
  <p class=' text-slate-500'>{Apis.name}</p>
  </Col>

  )}
</Row>
<Row>
<Col ></Col>
  {ProductsApis.map((Apis)=>
<Col className='text-center flex flex-col '>
  <img src={Apis.src1} alt=''/>
  <p class='font-bold text-slate-500 pt-3'>{Apis.title}</p>
  <p class=' text-slate-500'>{Apis.name}</p>
  </Col>
  )}*/}
  </Row> 
      </Container>
</div>
   
  );
}

export default Products;