const initialState = { 
    user: '',
    token: '',
    isLogged: false,

};

export default function authReducer ( state= initialState, action){
   switch(action.type){
    case USER_SIGNIN_SUCCESS:
        return { isLogged: true, token:action.payload.body.token }
    case USER_SIGNIN_FAIL: 
        return { isLogged: false, token: null, error: action.paylaod }
    case USER_SIGNOUT: 
        return { isLogged: false, token: null }
        default: 
    return state;
}
};
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCESS';
export const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';
export const USER_SIGNOUT = 'USER_SIGNOUT';
