import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { navigate } from '@reach/router';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>{ 
                setProducts(res.data)
                setLoaded(true);
            });
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res=>{
                setProducts([...products, res.data]);
                navigate('/')
            })
    }

    return (
        <div>
        
            <ProductForm onSubmitProp={createProduct} inititle="" iniprice="0" inidescription=""/>
           <hr/>
           {loaded && <ProductList removeFromDom={removeFromDom}/>}
        </div>
    )
}

