import React from 'react'
import { Link } from 'react-router-dom'

export default function TopSellerCard({star,reviews,image,price,text,link}) {
  return (
    <>
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="topSellerCard">
        <img src={image} alt={text} />
        <p>{text}</p>
        <div className="review">
          <p>{star}</p>
          <p>{reviews}</p>
        </div>
        <h3>₹{price}</h3>
    </div>
    </Link>
    </>
  )
}
