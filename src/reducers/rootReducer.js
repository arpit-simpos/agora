//eslint-disable-next-line
import hashTagReducer from '../reducers/HashTags/hashTagReducer'
import loginReducer from '../reducers/HashTags/loginReducer'
//eslint-disable-next-line
import { combineReducers } from 'redux'

//const allReducers = combineReducers({
//    hashTags: hashTagReducer,
//    login: loginReducer
//})
//export default allReducers
export default function rootReducer(state = {}, action) {
    return {
        login: loginReducer(state.login, action)
    }
}

