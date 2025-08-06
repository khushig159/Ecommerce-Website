import React, { useState } from 'react'
import ProductItem from '../components/ProductItem';
import { useLoaderData } from 'react-router-dom';

const Cctv = () => {
  const {cameras}=useLoaderData()
  const[searchTerm,setSearchTerm]=useState('');

  function handleChange(event){
    setSearchTerm(event.target.value)
  }

  const filteredItems=cameras.filter((prod)=>prod.productName.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
    <div className="Product">
      <input type="text" placeholder='Search' onChange={handleChange} value={searchTerm}/>
      {filteredItems.length===0 && <p>No items match your search!</p>}
      <ProductItem products={filteredItems}/>
      </div>
    </>
  )
}

export default Cctv

