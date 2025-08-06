import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../store/CartContest'
import {motion} from 'framer-motion';

export default function ProductItem({products}) {

  const [showMessage, setShowMessage] = useState(false);
  const cartCtx=useContext(CartContext);

  function OnAddToCart(product){
    cartCtx.addItems(product)
    setShowMessage(true)

    setTimeout(() => setShowMessage(false), 2000);
    }
  return (
    <div className='product-name'>
        <ul className='product-list'>
            {products.map((product)=>(
                <li className='product-listtem' key={product.id}>
                    <Link to={`/product/${product._id}`}>
                    <div className="image-container">
                    <img src={product.productImage[0]} alt={product.productName} /></div>
                    <h3>{product.productName}</h3>
                    <p>₹{product.productPrice}</p>
                    </Link>
                    <button onClick={()=>{OnAddToCart(product)}}>Add to Cart</button>
                </li>
            ))}
        </ul>

        {showMessage && (
          <motion.div initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="message"
        >
          ✅ Item added to cart!
        </motion.div>
        )}
    </div>
  )
}
