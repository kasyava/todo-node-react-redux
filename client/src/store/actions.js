import axios from '../axios-config';


export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_ERROR = 'FETCH_TASK_ERROR';
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';
export const FETCH_REGISTER_ERROR = 'FETCH_REGISTER_ERROR';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR';



export const fetchTaskRequest = () => ({type: FETCH_TASK_REQUEST});

export const fetchTaskSuccess = (task) => {
    return {type: FETCH_TASK_SUCCESS, task};
};

export const fetchTaskError = (error) => {
    return {type: FETCH_TASK_ERROR, error};
};


export const fetchTask = (token) => {
    const headers = {"Token": token};
    return (dispatch) => {
        dispatch(fetchTaskRequest());
        axios.get('tasks', {headers})
            .then(responce =>{
                dispatch(fetchTaskSuccess(responce.data))
            }, error =>{
                dispatch(fetchTaskError(error));
            })
    }
};


export const fetchRegisterSuccess = (data) => {
    return {type: FETCH_REGISTER_SUCCESS, data};
};
export const fetchRegisterError = (error) => {
    return {type: FETCH_TASK_ERROR, error};
};

export const sendRegisterForm = (e, username, password,  history) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('username', username);
    formData.set('password', password);

    return (dispatch) => {

        axios.post('users', formData)
            .then(responce =>{
                dispatch(fetchRegisterSuccess(responce.data));
                history.push('/');
            }, error =>{

                dispatch(fetchRegisterError(error.response.data));
            })
    }
};




export const fetchLoginSuccess = (data) => {
    return {type: FETCH_LOGIN_SUCCESS, data};
};
export const fetchLoginError = (error) => {
    return {type: FETCH_LOGIN_ERROR, error};
};

export const sendLoginForm = (e, username, password, history) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('username', username);
    formData.set('password', password);
    return (dispatch) => {

        axios.post('users/sessions', formData)
            .then(responce =>{
                dispatch(fetchLoginSuccess(responce.data))
                history.push('/');
            }, error =>{
                dispatch(fetchLoginError(error.response.data));
            })
    }
};



export const FETCH_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS';

export const fetchLogoutSuccess = (data) => {
    return {type: FETCH_LOGOUT_SUCCESS, data};
};

export const fetchLogout = (token, history) =>{

    return (dispatch) => {

        axios.delete('users/sessions', {headers: {Token: token} })
            .then(responce =>{
                dispatch(fetchLogoutSuccess(responce.data));

            })
    }

};




export const FETCH_ADD_TASK_SUCCESS = 'FETCH_ADD_TASK_SUCCESS';
export const FETCH_ADD_TASK_ERROR = 'FETCH_ADD_TASK_ERROR';

export const fetchAddTaskSuccess = (data) => {
    return {type: FETCH_ADD_TASK_SUCCESS, data};
};
export const fetchAddTaskError = (error) => {
    return {type: FETCH_ADD_TASK_ERROR, error};
};

export const sendTaskForm = (e, state, token, history) =>{
    e.preventDefault();
    const formData = new FormData();

    Object.keys(state).forEach(item =>{
        formData.append(item, state[item]);
    });
     if(token) {
         const headers = {"Token": token};
         console.log(headers);
         return (dispatch) => {
            axios.post('tasks',formData,{headers})
                .then((response)=>{
                    dispatch(fetchAddTaskSuccess(response.data));
                    history.push('/');
                }, error =>{
                    dispatch(fetchAddTaskError(error.response.data));
                })
        }
     }

};




export const FETCH_DELETE_TASK_ERROR = 'FETCH_DELETE_TASK_ERROR';

export const fetchDeleteTaskError = (error) => {
    return {type: FETCH_DELETE_TASK_ERROR, error};
};



export const deleteTask = (id, token, history) =>{

    if(token) {
        const headers = {"Token": token};
        console.log(headers);
        return (dispatch) => {
            axios.delete('tasks/' + id, {headers})
                .then((response)=>{
                    dispatch(fetchTask(token));
                    history.push('/');
                }, error =>{
                    dispatch(fetchDeleteTaskError(error.response.data));
                })
        }
    }

};

