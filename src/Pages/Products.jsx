import React, { useContext } from 'react'
import { BredCrum } from '../Components/BreadCrum/BredCrum';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Products = () => {
  const{all_product}=useContext(ShopContext)
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number
    (productId))
  return (
    <div>
        <BredCrum product={product}/>
        <ProductDisplay product={product}/>
        <RelatedProducts/>
    </div>
  )
}
