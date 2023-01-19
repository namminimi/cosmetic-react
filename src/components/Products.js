import axios from 'axios';
import React from 'react';
import UseAcync from '../customHook/UseAcync';

async function getProducts(){
    const response = await axios.get(
        "http://localhost:8080/products"
    )
    console.log(response.data)
    return response.data;
}

const Products = () => {
    const state =  UseAcync(getProducts, []);
    console.log(state)
    const {loading, data, error} = state
    if(loading) return <div>로딩중....</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!data) return null
    return (
        <div>
            {data.products.map(pr => <div><p>{pr.name}</p>
            <p>{pr.price}</p><p>{pr.seller}</p></div>)}            
        </div>
    );
};

export default Products;