import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAcync from '../customHook/UseAcync';
import "./index.css"

const detailFetch = async (id) => {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    return response.data;
}
const ProductPage = () => {
    const { p_id } = useParams();
    const navigate = useNavigate();
    const state = UseAcync(detailFetch,[], p_id)
    console.log(state)
    const {loading, data, error} = state
    //삭제하기
    const onDelete = () => {
        axios.delete(`http://localhost:8080/delProduct/${p_id}`)
        .then(result=>{
            console.log("삭제되었습니다.");
            navigate("/")
        })
        .catch(err =>{
            console.log(err);
        })
    }
    console.log(data)
    if(loading) return <div>로딩중....</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!data) return null
    return (
        <div className='productDetail'>
            <h2>{data[0].p_name}</h2>
            <div className='productImg'>
                <img src={`http://localhost:8080/upload/${data[0].p_img}`} width="600px" alt=""/>
            </div>
            <div>
                <p>{data[0].p_name}</p>
                <p>{data[0].p_desc}</p>
                <p>{data[0].p_price}</p>
                <p>무료배송</p>
            </div>
            <div>
                <button onClick={onDelete}>삭제</button>
            </div>
        </div>
    );
};

export default ProductPage;