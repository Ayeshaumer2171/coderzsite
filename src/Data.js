
 import { Button } from 'react-bootstrap';
 import Accordion from 'react-bootstrap/Accordion';
 import { Link ,useLocation} from 'react-router-dom';
 import  { useState } from 'react';
 import { CartContext } from './CartContext';
 import  { useContext } from 'react';

 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 

 export  default   function Data(data,props){
  const { cart, addItem } = useContext(CartContext);
  const handleAddToCart = () => {
    const item = {
      id: data.id,
      title: data.productTitle,
      price: data.price,
      quantity: value,
      image: data.data.image,

    };
    addItem(item);
    toast.success('Item added to cart');

  };

  const handleDecreaseQuantity = () => {
    if (value > 1) {
      setvalue(value - 1);
      toast.info('Quantity decreased');
    }
  };
  
  const handleIncreaseQuantity = () => {
    setvalue(value + 1);
    toast.info('Quantity increased');
  };
  


  const [show, setShow] = useState(false);
  const [value, setvalue] = useState(1);
  
  const Data=data.data;
 
    return(
      <>
<div className='align-spacebetween'>
<p></p>

<p className='font-bold'>{data.productTitle}</p><br />
<p>{data.price}</p>
{/* <div className="flex flex-row">
                <p> QUANTITY</p>
                <div className="w-7 text-center ml-2 border-2 border-black  h-7" onClick={() => { value > 1 ? setvalue(value - 1) : setvalue(value); }}> - </div>
                <div className="w-7 text-center  border-2 border-black h-7"> {" "} {value} </div>
                <div className="w-7 text-center  border-2 border-black  h-7" onClick={() => { setvalue(value + 1); }}> +</div>
              </div> */}
              <div className="flex flex-row">
        <p>QUANTITY</p>
        <div className="w-7 text-center ml-2 border-2 border-black h-7" onClick={handleDecreaseQuantity}>
          -
        </div>
        <div className="w-7 text-center border-2 border-black h-7"> {value} </div>
        <div className="w-7 text-center border-2 border-black h-7" onClick={handleIncreaseQuantity}>
          +
        </div>
      </div>
<hr />
<Accordion defaultActiveKey="0" className='w-70 border-none'>
      <Accordion.Item eventKey="1">
        <Accordion.Header>DESCRIPTION</Accordion.Header>
        <Accordion.Body>
        2 PIECE<br />
FABRIC SHIRT : CHIFFON<br />
FABRIC TROUSER : GRIP CRUSH <br />
MODEL IS WEARING SMALL SIZE<br />
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <hr />
      <p className='font-bold'>COLOR: <input type='button' value='Black' className='bg-color-grey ' /></p><br/> 

        <Button className='bg-white border-dark text-black mr-1'>ADD TO WISHLIST</Button>
   <Link to='/page5'><Button className='bg-black border-dark text-white' onClick={handleAddToCart}>ADD TO CART</Button></Link> 
        <Button className='bg-white border-dark text-black ml-1 '> <Link to='/page4' className='no-underline text-black' state ={{Quantity:value ,pics:Data}} >BUY IT NOW</Link></Button><br /><br/>
        <Accordion defaultActiveKey="0" className='w-70 border-none'>
      <Accordion.Item eventKey="1">
        <Accordion.Header>INSTRUCTION</Accordion.Header>
        <Accordion.Body>
        DRY CLEAN RECOMMENDED<br />
IRON THE CLOTHES AT MODERATE TEMPERATURE<br />
DO NOT USE ANY TYPE OF BLEACH OR STAIN REMOVING CHEMICALS<br />
ACTUAL COLOR MAY SLIGHTLY VARY FROM THE IMAGE SHOWN.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <hr />
      <Accordion defaultActiveKey="0" className='w-70 border-none'>
      <Accordion.Item eventKey="1">
        <Accordion.Header>DELIVERY</Accordion.Header>
        <Accordion.Body>
        DISPATCH TIME (PAKISTAN) : WITHIN ONE WEEK<br/>
 DISPATCH TIME (INTERNATIONAL) : WITHIN 2 WEEKS
        </Accordion.Body>
      </Accordion.Item>
      </Accordion> 
      <hr />
      <Accordion defaultActiveKey="0" className='w-70 border-none'>
      <Accordion.Item eventKey="1">
        <Accordion.Header>EXCHANGE</Accordion.Header>
        <Accordion.Body>
        ANY PRODUCT BOUGHT FROM BAROQUE’S ONLINE STORE CAN BE EXCHANGED FROM THE ONLINE STORE ONLY, PROVIDED IT IS UNUSED AND STILL HAS THE LABEL AND TAG IN THEIR ORIGINAL STATE.
FOR SALE ORDERS, EXCHANGES WILL BE PROVIDED FOR VALID REASONS ONLY I.E FAULTY OR INCORRECT ITEMS DELIVERED.
REFUNDS ARE NOT IN CASH - THE CLIENT WILL BE ISSUED A COUPON OF THE SAME VALUE VALID FOR ONLINE STORE ONLY, WHICH CAN BE USED IMMEDIATELY OR IN THE FUTURE.
EXCHANGE POLICY IS ONLY LIABLE WITHIN 14 DAYS AFTER THE GOODS ARE DELIVERED.
FOR MORE INFORMATION REGARDING OUR EXCHANGE POLICY *CLICK HERE*
FOR INTERNATIONAL ORDERS, WE DO NOT OFFER EXCHANGES UNLESS WE DELIVER THE INCORRECT ORDER OR THE PRODUCT IS FAULTY. * BAROQUE DOES NOT PROVIDE EXCHANGE/REFUND FOR CUSTOM
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <hr/>

<br />
<p className='text-bold'>CUSTOMER REVIEWS</p>
<div className='flex flex-row space-x-24'>
<p>no rewies yet </p><p>write a reviews</p>
</div>
<hr />
</div>

</>
    )
          
}
 