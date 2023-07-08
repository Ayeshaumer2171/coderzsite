
// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// export default function CartPage() {
//   const { cart, removeItem, clearCart } = useContext(CartContext);

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => { 
//       return total + (Number(item.price) * Number(item.quantity));
//     }, 0);
//   };
  
   
//   console.log(cart)

//   return (
//     <div className="max-w-4xl mx-auto mt-8">
//       <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
//       {cart.length === 0 && <p>Your cart is empty.</p>}
//       {cart.map((item, index) => (
//         <div className="border rounded-lg p-4 mb-4" key={item.id}>
//           <h4 className="text-xl font-medium">{item.title}</h4>

//           <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-lg my-2" />
//           <p className="text-gray-500">Price: ${item.price}</p>
//           <p className="text-gray-500">Quantity: {item.quantity}</p>
//           <button
//             className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mt-4"
//             onClick={() => removeItem(index)}
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//       {cart.length > 0 && (
//         <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
//          <h3 className="text-xl font-medium">Total Price: ${getTotalPrice()}</h3>
           
//           <button
//             className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
//             onClick={() => clearCart()}
//           >
//             Clear Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartPage() {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => {
      const itemPrice = Number(item.price) * Number(item.quantity);
      return total + itemPrice;
    }, 0);
    return totalPrice.toFixed(2); // Format total price with two decimal places
  };

console.log(cart)

  const handleDeleteItem = (index) => {
    removeItem(index);
    toast.success('Item deleted successfully');
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared successfully');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item, index) => (
        <div className="border rounded-lg p-4 mb-4" key={item.id}>
          <h4 className="text-xl font-medium">{item.title}</h4>

          <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-lg my-2" />
          <p className="text-gray-500">Price: ${item.price}</p>
          <p className="text-gray-500">Quantity: {item.quantity}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mt-4"
            onClick={() => handleDeleteItem(index)}
          >
            Delete
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-medium">Total Price: ${getTotalPrice()}</h3>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
}

