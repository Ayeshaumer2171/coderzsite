import React from 'react';
 import Header from './Header';
import Menu from './Menu';
import Cards from './Cards';
import './index.css';
import Foot from './Foot'
import End from './End';
import News from './Grid';
 import { BrowserRouter , Routes,Route, Form,} from 'react-router-dom';
 import Unstiched from './Unstiched';
 import Bottom from './Bottom'
 import Dupattas from './Dupattas'
 import Shawls from './Shawls'
 import Ready from './Ready'
 import Para from './Para';
import Broque2 from './Broque2';
import Login from './Login';
import Forgot from './Forgot';
import Create from './Create';
import Broque from './Broque';
import NewsLetterPage from './NewsLetterPage';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



  function App(props) {
  const cartItems = props.cartItems;

 return(
  <>
  <CartProvider>

 <BrowserRouter>
 <Header />
 <Menu />
 <Routes>
 
 <Route path='/' element={<><Para /><Cards /><News /></>} />
 <Route path='shawls' element={<Shawls />} />
 <Route path='unstiched' element={<Unstiched/>} />
 <Route path='readytowear' element= {<Ready />} />
 <Route path='dupattas' element={<Dupattas />} />
  <Route path='bottoms' element={<Bottom />} />
 <Route path='page3' element={<Broque />} />
 <Route path='page4' element={<Broque2 />} />
 <Route path='login' element={<Login />} />
 <Route path='forgot' element={<Forgot />} />
 <Route path='create' element={<Create />} />
 <Route path='newsletter' element={<NewsLetterPage />} />
 <Route path='page5' element={<Cart  items={cartItems}/>} />

 </Routes >
 <Foot />
 <End />
 </BrowserRouter>  
 </CartProvider>
 <ToastContainer position="bottom-right" />
 </>
  )
}

export default App;

