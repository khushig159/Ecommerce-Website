import React, { useContext, useState } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';

import CartContext from '../store/CartContest';
import { motion } from 'framer-motion';
import ProductItem from '../components/ProductItem';

const ProductDetails = () => {
  const { products } = useLoaderData();
  const [showMessage, setShowMessage] = useState(false);

  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.productId;
  const prod = products.find((prod) => prod._id === id);

  function AddToCart(product) {
    cartCtx.addItems(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  }

  if (!prod) {
    return <p>Product not found.</p>;
  }

  const similarProducts=products.filter(item=>item.productCategory==prod.productCategory && item._id!=prod._id);
  return (
    <div className='product-details-main'>
      <div className="product-details">
        <div className="first-part">
        <img src={prod.productImage[0]} alt={prod.productName} />
        <div className="button">
        <button onClick={() => AddToCart(prod)}>Add to Cart</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
        </div></div>
      <div className="product-details-text">
        <h1>{prod.productName}</h1>
        <div className="product-specs">
          {Object.entries(prod.productDescription).map(([key, value]) =>
            key !== "Description Of The Product" ? (
              <p key={key}><strong>{key}:</strong> {value}</p>
            ) : null
          )}
        </div>

        <h3>₹ {prod.productPrice}</h3>
      </div>
    </div>
      <div className="product-des">
          <p>{prod.productDescription["Description Of The Product"]}</p>
        </div>
        <div className="image-list">
          <img src={prod.productImage[1]} alt="" />
          <img src={prod.productImage[2]} alt="" />
          <img src={prod.productImage[3]} alt="" />

        </div>
        <div className="similar-products">
          <h2>Similar Products</h2>
          <ProductItem products={similarProducts}/>
        </div>
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="message"
        >
          ✅ Item added to cart!
        </motion.div>
      )}
  </div>
  );
};

export default ProductDetails;
