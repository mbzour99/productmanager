import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useParams } from "react-router-dom";
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const UpdateProduct = (props) => {
    // const { id } = useParams();
    const [product, setProduct]=useState({});

    const[status,setStatus]=useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                setProduct(res.data)
                setStatus(true);
            })
    }, [props.id]);

    const updatePerson = product => {
        axios.put('http://localhost:8000/api/product/' + props.id, product,navigate('/'))
            .then(res => console.log(res)) .catch(err=>console.error(err));
    }
 
    return (
        <div>
            <h1>Update Product</h1>
   
    {status && (
                
    <ProductForm
        onSubmitProp={updatePerson}
        inititle={product.title} iniprice={product.price} inidescription={product.description}
    />
)}

<DeleteButton productId={product._id} successCallback={() => navigate('/')} />
        </div>
    )
}
    
export default UpdateProduct;







