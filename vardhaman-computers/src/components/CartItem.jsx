import React from 'react'

export default function CartItem({
    name,
    quantity,
    image,
    onIncrease,
    onDecrease,
    price
}) 
{
    console.log("Price:", price, "Quantity:", quantity);

    const numericPrice = Number((price ?? 0).toString().replace(/,/g, ''));
    const totalprice = numericPrice * Number(quantity); 

  return (
    <li className='cart-item'>
      <div className="cart-actions">
            <button onClick={onDecrease}>-</button>
            <span> {quantity}</span>
            <button onClick={onIncrease}>+</button>
        </div>
        <div className="image-cartitem">
        <img src={image} alt={name} />
        </div>
        <div className="details">
        <h4>{name}</h4>
        <h5>₹{totalprice}</h5>
        </div>
       </li>
  )
}
