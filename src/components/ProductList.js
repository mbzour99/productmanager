import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import {useState ,useEffect} from 'react';
const ProductList = (props) => {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProducts(res.data));
    }, [])
    
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    return (
        <div>
            {products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    {/* <button onClick={(e)=>{ deleteProduct(product._id)}}>
                        Delete Product
                    </button> */}
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}></DeleteButton>
                </p>
            })}
        </div>
    )
}
    
export default ProductList;



