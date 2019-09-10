import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER
} from '../types';

export default (state, action) => {
    switch (action.type){
        default:
            return state;
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload.items,
                loading: false
            }                   
    }

};