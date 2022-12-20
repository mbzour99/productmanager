import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const[description,setDescription]=useState("");
    
    const onSubmitHandler = e => {
 
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>{console.log(res);setTitle("product title ....");setPrice(0);setDescription("enter des...");})
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <div>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>           
            <input type="submit"/>
        </form>
        </div>
    )
}
