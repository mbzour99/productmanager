import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useParams } from "react-router-dom";
import {Link} from'@reach/router';

const ShowOne = (props) => {
    const [product,setProduct] = useState({})
    // const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +props.id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [props.id]);
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p> Price: {product.price}</p>
            <p>Description:{product.description}</p>
            <Link to ={'/edit/'+product._id}>update product</Link>
        </div>
        
    )
}
    
export default ShowOne;

