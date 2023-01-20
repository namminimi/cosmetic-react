import { useEffect } from 'react';
import { useReducer } from 'react';
//1. 상태초기화
    const initialState = {
        loading: false,
        data: null,
        error: null
    }

    //2.리듀서함수 구현
    //로딩중일때 상태 업데이트  LOADING
    //데이터를 성공적으로 받을때 상태 업데이트 SUCCESS
    //에러가 발생했을 경우 상태 업데이트 ERROR
    function reducer(state, action) {
        switch(action.type) {
            case 'LOADING':
                return {
                    loading: true,
                    data: null,
                    error: null
                };
                case 'SUCCESS':
                return {
                    loading: false,
                    data: action.data,
                    error: null
                };
                case 'ERROR':
                return {
                    loading: false,
                    data: null,
                    error: action.error
                };
            default: 
                return state
        }
    }

    const UseAcync = (callback, deps=[], id) => {
        console.log(callback)
        const [state, dispatch] = useReducer(reducer, initialState)
        //데이터 요청 함수
        const fetchData = async () => {  //promise부르기위한 키워드
            //loading의 value를 true로 상태 업데이트
            dispatch({
                type: "LOADING"
            })
            //에러가 발생할 확률이 높은 코드작성시 에러핸들링
            try {
                const data = await callback(id);
                dispatch({
                    type: "SUCCESS",
                    data //data: data를 줄임
                })
            }
            catch(e){
                dispatch({
                    type: "ERROR",
                    error: e
                })
            }
        }
        useEffect(()=>{
            fetchData();
        },deps)  //마운트 됬을때 호출
        return state  //상태 리턴
    }

    
export default UseAcync;