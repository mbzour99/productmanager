import React, { useEffect, useState } from 'react'

import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    const [products, setProducts] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[products]);
    

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }


    return (
        <div>
            <ProductForm></ProductForm>
           <hr/>
           <hr/>
           {loaded && <ProductList products={products} removeFromDom={removeFromDom}></ProductList>}


        </div>
    )
}
    
export default Main;

