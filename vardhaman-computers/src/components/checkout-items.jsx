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

    const numericPrice = Number(price.toString().replace(/,/g, ''));
    const totalprice = numericPrice * Number(quantity); 

  return (
    <li className='checkout-item'>
      <div className="checkout-actions">
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </div>
        <img src={image} alt={name} />
        <div className="details">
        <h4>{name}</h4>
        <h5>₹{totalprice}</h5>
        </div>
       </li>
  )
}
