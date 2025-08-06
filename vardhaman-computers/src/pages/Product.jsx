import React, { useState } from 'react'
import ProductItem from '../components/ProductItem';
import {useLoaderData} from 'react-router-dom';

const Product = () => {
  const[searchTerm,setSearchTerm]=useState('');
  const {products} = useLoaderData();
  function handleChange(event){
    setSearchTerm(event.target.value)
  }

  const filteredItems = products.filter((prod) =>
    (prod.productName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     prod.productCategory?.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
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

export default Product


// export async function loader(){
//   const response=await fetch ('http://localhost:8080/products/');
//   if(!response.ok){
//     throw json({message:'Could not fetch Products'},
//     {
//       status:500
//     });
//   }
//   else{
//       const resdata=await response.json();
//       return {
//         products:resdata
//       }
//     }
// }
