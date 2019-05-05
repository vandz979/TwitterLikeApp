import * as actionTypes from "./actionTypes";
import axios from 'axios';



export const gettweets = () => {
    return(dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then((response) => {
            dispatch(gettweetsr(response.data))
            
        })
    }    
};

export const gettweetsr = (res) => {
    return{
        type: actionTypes.GETTWEETS,
        result: res
    };
};

export const getsearch = (str) => {
    return(dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?q=${str}`)
        .then((response) => {
            const full = response.data.map((cur) => {
                let r = {...cur};
                r.color = '#a9a9a9';
                return r;
            })
            dispatch(getsearchr(full))
            
        })
    }
};

export const getsearchr = (res) => {
    return{
        type: actionTypes.SEARCHTWEETS,
        data: res
    };
};


export const setlike = (id) => {
    return{
        type: actionTypes.LIKE,
        id: id
    };

}