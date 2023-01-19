import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1><Link to="/">HERA</Link></h1>
            <ul>
                <li>스킨케어</li>
                <li>메이크업</li>
                <li>프래그런스</li>
                <li><Link to="./upload">제품등록</Link></li>
            </ul>
        </div>
    );
};

export default Header;