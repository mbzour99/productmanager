import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
    
const ProductList = (props) => {
  
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                props.removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete Product
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default ProductList;



