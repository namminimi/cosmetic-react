import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import "./index.css"
const UploadPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData ] = useState({  //상태 
        p_name: "",
        p_price: "",
        p_img : "",
        p_desc: "",
        p_quantity: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target;  //업데이트
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const onReset = () => {  //취소버튼 누를시 초기화
        setFormData({
            p_name: "",
            p_price: "",
            p_img : "",
            p_desc: "",
            p_quantity: ""
        })
    }
    const onChangeImage = (e) => {
        const {name} = e.target;
        //폼테크 생성
        const imageFormData = new FormData();
        //폼테크에 속성 추가하기
        imageFormData.append(name, e.target.files[0])
        //이미지 업로드요청(서버로 이미지파일 업로드 요청)
        axios.post(`${API_URL}/upload`, imageFormData, {
            Headers: {'content-type':'multipart/form-data'}
        }).then(res=>{
            setFormData({
                ...formData,
                p_img: res.data.imageUrl
            })
        })
        .catch(e=>{
            console.log(e)
        })
    }

    const onSubmit = (e) => {
        //form에 연결된 이벤트를 제거
        e.preventDefault();
        console.log(formData)
        //입력이 다 되어있는지 체크
        if(formData.p_name && formData.p_img && formData.p_desc
            && formData.p_price && formData.p_quantity) {
                console.log("ㄱㄱㄱㄱㄱㄱ")
                insertProduct();
            }
    }
    function insertProduct() {
        axios.post(`${API_URL}/addProduct`, formData)//formDate 같이 전송
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(e=>{
            console.log(e);
        })
    }
    return (
        <div className='upload'>
            <h2>제품등록하기</h2>
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            상품이름
                        </td>
                        <td>
                            <input type="text" name="p_name"
                            value={formData.p_name} onChange={onChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            상품이미지
                        </td>
                        <td>
                            <input type="file" name="file"
                            onChange={onChangeImage}/>
                            {formData.p_img && <img src={`${API_URL}/upload/${formData.p_img}`} width="300" height="300" alt=''/>}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            가격
                        </td>
                        <td>
                            <input type="number" name="p_price" step={1000}
                            value={formData.p_price} onChange={onChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            사품수량
                        </td>
                        <td>
                            <input type="number" name="p_quantity"
                            value={formData.p_quantity} onChange={onChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            상세설명
                        </td>
                        <td>
                            <textarea name='p_desc' onChange={onChange} >
                                {formData.p_desc}
                            </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colsapan = {2}>
                            <button type="submit">등록</button>
                            <button type="reset" onClick={onReset}>취소</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UploadPage;