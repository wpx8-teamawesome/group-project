const INITIAL_STATE = {
    user: null, 
}

const LOGIN_USER = "LOGIN_USER"; 
const LOGOUT_USER = "LOGOUT_USER"; 

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_USER: 
            return Object.assign({}, state, {user: action.payload}); 
        case LOGOUT_USER: 
            return Object.assign({}, state, {user: null}); 
        default: 
            return state; 
    }
}

export function loginUser(user) {
    console.log('login user called from reducer', user)
    return {
        type: LOGIN_USER, 
        payload: user //This will be user object or username + photo URL
    }
}

export function logoutUser() {
    console.log('logout user called from reducer')
    return {
        type: LOGOUT_USER, 
    }
}