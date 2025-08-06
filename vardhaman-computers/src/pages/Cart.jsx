import React, { useContext } from 'react'
import CartContext from '../store/CartContest';
import CartItem from '../components/CartItem';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { currencyFormatter } from '../UI/formatiing';
export default function Cart() {
  const navigate=useNavigate();
  const cartCtx=useContext(CartContext);

//   const totalPrice = cartCtx.items.reduce((total, item) => {
//     const numericPrice = Number((item.price || item.productPrice || 0).toString().replace(/,/g, ''));
//     return total + (item.quantity * numericPrice);
// }, 0);
const totalPrice = cartCtx.items.reduce((total, item) => {
  const numericPrice = Number((item?.price ?? item?.productPrice ?? 0).toString().replace(/,/g, ''));
  return total + (item.quantity * numericPrice);
}, 0);


  return (
    <>
    <div className='cart'>
      <div className="cart-head">
      <h2>Your Cart</h2>
      <img src="https://img.freepik.com/free-vector/shopping-cart-icon-isolated-illustration_18591-82226.jpg?uid=R124924140&ga=GA1.1.250133232.1718623156&semt=ais_hybrid" alt="" />
      </div>
    {cartCtx.items.length<1 && <p>No items in Cart!</p>}
    <ul>
      {cartCtx.items.map(item=>(
        <CartItem key={item._id} name={item.productName}
        price={item.productPrice} image={item.productImage[0]} quantity={item.quantity}
        onIncrease={()=>cartCtx.addItems(item)}
        onDecrease={()=>cartCtx.removeItems(item._id)}/>
      ))}
    </ul>
    <p className='cart-Total'> Total Price : {currencyFormatter.format(totalPrice)}</p>
    <div className="cart-action">
      <button onClick={()=>navigate(-1)}>Close</button>
      {cartCtx.items.length>0 && <Link to='/checkout'><button>Go to Checkout</button></Link> }
    </div>
    </div>
    </>
  );
}
