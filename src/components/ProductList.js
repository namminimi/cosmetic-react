import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';

const ProductList = ({p_id, p_name, p_price, p_img}) => {
    return (
            <li>
                <Link to={`/detailView/${p_id}`}>
                    <img src={`${API_URL}/upload/${p_img}`} alt='상품1'/>
                    <h3>{p_name}</h3>
                    <p>{p_price}</p>
                    <p>강력한 5중 차단과 안티에이징 – 멀티기능성 데일리 선크림</p>
                </Link>
            </li>
    );
};

export default ProductList;