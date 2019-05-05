import * as actionTypes from "../actionTypes";

const initialState = {
    data: []
}

const searchreducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.SEARCHTWEETS:
        return{
            ...state,
            data: action.data
        }

        case actionTypes.LIKE:
        const inde = state.data.findIndex((cur) => cur.id===action.id );
        const newArr = state.data.map((cur,index) => {
            if(index===inde){
                return ({...cur,
                    color: '#ff0000'})          

        }
        else return cur
        })
        console.log(inde);
        return{
            ...state,
            data: newArr
        }

        default:
        return state
    }

};


export default searchreducer;