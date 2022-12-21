import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';

export default props => {
    const{inititle,iniprice,inidescription ,onSubmitProp}=props;
    const [title, setTitle] = useState(inititle); 
    const [price, setPrice] = useState(iniprice);
    const[description,setDescription]=useState(inidescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price,description});
        navigate('/')
    }
      
    return (
               <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text"name="title"  onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number"  name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" name=" description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>           

            <input type="submit"/>
        </form>
    )
}

