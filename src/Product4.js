import Hover1 from './Hover1'
import{Col,Container,Row} from 'react-bootstrap'
import {ReadyApi} from './ReadyApi'
 function Product4(){
    return(
    <Container className='mt-0'>
        <Row>
            {ReadyApi.map((category)=>{
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
 export default Product4