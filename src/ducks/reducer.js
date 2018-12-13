const INITIAL_STATE = {
    user: {}, 
}

const LOGIN_USER = "LOGIN_USER"; 
const LOGOUT_USER = "LOGOUT_USER"; 

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_USER: 
            return Object.assign({}, state, {user: action.payload}); 
        case LOGOUT_USER: 
            return Object.assign({}, state, {user: {}}); 
        default: 
            return state; 
    }
}

export function loginUser(user) {
    return {
        type: LOGIN_USER, 
        payload: user //This will be user object or username + photo URL
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER, 
    }
}