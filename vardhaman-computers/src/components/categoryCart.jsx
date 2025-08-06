import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({image,text,link}) {
  return (
    <>
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="cartegoryCard">
        <img src={image} alt={text} />
        <p>{text}</p>
    </div>
    </Link>
    </>
  )
}
