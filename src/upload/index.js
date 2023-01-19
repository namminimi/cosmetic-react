import React from 'react';
import "./index.css"
const UploadPage = () => {
    return (
        <div className='upload'>
            <h2>제품등록하기</h2>
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            상품사진
                        </td>
                        <td>
                            <input type="file" name="productimg"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            상품이름
                        </td>
                        <td>
                            <input type="text" name="p_name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            상품소개
                        </td>
                        <td>
                            <input type="text" name="p_info"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            가격
                        </td>
                        <td>
                            <input type="number" name="p_price" step={10}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            사품수량
                        </td>
                        <td>
                            <input type="number" name="p_quantity"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            상세설명
                        </td>
                        <td>
                            <textarea name='desc'>

                            </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colsapan = {2}>
                            <button>등록</button>
                            <button>취소</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UploadPage;