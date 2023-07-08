import React, { useState } from 'react'
import Allproducts from './components/Allproducts';
import Navbar from './components/Navbar';
import data from './data';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './components/Cart';

function App() {
  const { products } = data;

  //hook for getting the product into Cart
  const [cartItems, setCartItems] = useState([]);

  //function for adding the product to the Cart
  const onAdd = (product) => {
    //grabing the product on clicking the + button
    //yani koi ek product ap k cart mai pra hwa hai aur again ap ne wohi product add to cart kr lia
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
      );
      console.log(cartItems);
    }else{
      setCartItems([...cartItems, { ...product, qty:1 }]);
      console.log(cartItems);
    }
  }

  //function for removing the product rom add to cart
  const onRemove =(product) => {
     //grabing the product on clicking the + button
    //yani koi ek product ap k cart mai pra hwa hai aur os ko minus krna hai
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty:exist.qty - 1 } : x 
      ))
    }
  }
  return (
    <div>
      <Router>
      <Navbar productsCount={cartItems.length} />
        <Switch>
          <Allproducts exact path="/" products={products} addProduct={onAdd} />
          <Cart path="/cart" cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
