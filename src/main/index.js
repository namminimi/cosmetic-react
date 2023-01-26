import axios from 'axios';
import React from 'react';
//import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import './index.css';
import UseAcync from '../customHook/UseAcync';
import { API_URL } from '../config/apiurl';

async function productFetch(){
    const response = await axios.get(`${API_URL}/products`);
    return response.data
}


const MainPage = () => {
    const state = UseAcync(productFetch, []);
    const {loading, data, error} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>;
    console.log(data);
    if(!data) return null;
    return (
        
        <div className='main'>
            <div className='visual'>
                <img src='../images/main2banner.PNG' alt='베너이미지1'/>
            </div>
            <div className='product'>
                <h2>신상품</h2>
                <ul>
                    {data.map(pro=> //배열을 바로 받아서 products뺐음
                        <ProductList key={pro.p_id} 
                        p_id={pro.p_id}
                        p_name={pro.p_name} 
                        p_price={pro.p_price}
                        p_img = {pro.p_img}
                        />)}
                </ul>
            </div>
        </div>
    );
};

export default MainPage;