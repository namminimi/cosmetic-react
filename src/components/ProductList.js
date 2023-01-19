import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({p_id, p_name, p_price}) => {
    return (
        <ul>
            <li>
                <Link to="/detailView/1">
                    <img src={`../images/product${p_id}.png`} alt='상품1'/>
                    <h3>{p_name}</h3>
                    <p>{p_price}</p>
                    <p>강력한 5중 차단과 안티에이징 – 멀티기능성 데일리 선크림</p>
                </Link>
            </li>
        </ul>
    );
};

export default ProductList;