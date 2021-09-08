const initialState = {
    loggedUserName: null,
    isLogin : 0
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGGED_USER': {
            return {
                loggedUserName: action.payload
               
              
               // hashTags: [...state.hashTags, action.payload]
            }
        } case 'ISLOGIN': {
            return {
                isLogin: action.payload
         
            }
        }
        default:
            return state;
    }
}