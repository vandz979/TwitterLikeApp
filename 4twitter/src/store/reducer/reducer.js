import * as actionTypes from "../actionTypes";

const initialState = {
    generaldata: {
        source: 'http://www.clker.com/cliparts/2/6/b/e/13904634594773788manga_girl1-hi.png',
        name: 'Akila Bharan',
        summary: 'Poetess, technology enthusiast, animal lover and flight commander. Treat everyone as you wish to be treated. Nature is still around watching '
    },
    location: {
        city:'Sydney',
        state:'NSW',
        country:'Australia',
        region:'APAC'
    },
    tweets: []
}

const mainreducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GETTWEETS:
        return{
            ...state,
            tweets: action.result
        }

        default:
        return state
    }


};


export default mainreducer;