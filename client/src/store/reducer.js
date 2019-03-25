import {
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_ERROR,
    FETCH_TASK_SUCCESS,
    FETCH_TASK_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_LOGOUT_SUCCESS,
    FETCH_REGISTER_ERROR,
    FETCH_ADD_TASK_SUCCESS,
    FETCH_DELETE_TASK_ERROR
} from "./actions";

const initialState ={
    counter: 0,
    task: null,
    isLoading: false,
    token: '',
    username: '',


};

const reducer = (state = initialState, action) =>{

    switch (action.type) {

        case FETCH_TASK_SUCCESS:
            return {...state, task: action.task, isLoading: false};

        case FETCH_TASK_REQUEST:
            return {...state, isLoading: true};


        case FETCH_REGISTER_SUCCESS:
        case FETCH_LOGIN_SUCCESS:

            return{...state, username: action.data.username, token: action.data.token};


        case FETCH_REGISTER_ERROR:
        case FETCH_LOGIN_ERROR:
        case FETCH_DELETE_TASK_ERROR:
            alert(action.error.error);
            return{...state};

        case FETCH_LOGOUT_SUCCESS:
            return{...state, username: '', token: '', task: null};

        case FETCH_ADD_TASK_SUCCESS:
            return {...state};


        default:
            return state;

    }

};


export default reducer;