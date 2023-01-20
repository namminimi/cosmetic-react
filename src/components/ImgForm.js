import axios from 'axios';
import React, { useState } from 'react';

const ImgForm = () => {
    const [imageUrl, setImageUrl ] = useState(null)
    const onChangeImage = (e) => {
       const {name} = e.target;
       //<form>태그 생성
       const imageFormData = new FormData();
       //<form>태그에 속성 추가하기
       imageFormData.append(name, e.target.files[0]);
       axios.post("http://localhost:8080/upload", imageFormData, {
        Headers: {'content-type': 'multipart/formdata'},

       }).then(res=>{
        console.log(res);
        setImageUrl(res.data.imageUrl);
       }).catch(e=>{
            console.log(e)
       })
    }
    return (
        <div>
            <table>
                <tr>
                    <tr>
                        <td>file</td>
                        <td>
                            <input type="file" name="file"  onChange={onChangeImage}/>
                            {
                                imageUrl ? <img src={`images/${imageUrl}`} alt = ""
                                width= "200px" height="200px"/> : 
                                (<div id="upload-img-bg">
                                    <img scr="images/product2.png" alt="" width="200px" height="200px"/>
                                </div>)
                            }
                        </td>
                    </tr>
                </tr>
            </table>
        </div>
    );
};

export default ImgForm;