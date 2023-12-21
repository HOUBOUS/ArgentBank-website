
export const USER_PROFILE_SUCESS = 'USER_PROFILE_SUCESS';
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL';
export const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE';
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET';



const initialState = {
    userName: '',
    firstName: '',
    lastName: '',
    sucess: false,
    
};

export default function userReducer( state = initialState, action ){
     

    switch(action.type){
       case USER_PROFILE_SUCESS:
        return{
            firstName: action.payload.body.firstName,
            lastName: action.payload.body.lastName,
        }

        case USER_PROFILE_FAIL: 
        return{
            error: action.payload
        }
       case USER_PROFILE_UPDATE:
        return{
            sucess: true,
            firstName: action.paylaod.body.firstName,
            lastName: action.payload.body.lastName,
        }
        case USER_PROFILE_RESET:
            return{
                firstName: null,
                lastName: null,
            }
         default:
         return  state;

        }
}