import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useParams } from "react-router-dom";
import { navigate } from '@reach/router';
const UpdateProduct = (props) => {
    // const { id } = useParams();
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const[description,setDescription]=useState("");
    const[status,setStatus]=useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setStatus(true);
            })
    }, [props.id]);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        if(status){
        axios.put('http://localhost:8000/api/product/' + props.id, {
            title,
            price,
            description
        },navigate('/'))
            .then(res => console.log(res) )
            .catch(err => console.error(err));
    }}
    
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} name="title"value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} name="price" value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} name="description"value={description}/>
            </p>           
            {/* <input  style={{backgroundColor:'yellow'}} type="submit" value="update the product" /> */}
            <button  style={{backgroundColor:'yellow'}} type="submit" >update</button>
        </form>
        </div>
    )
}
    
export default UpdateProduct;

