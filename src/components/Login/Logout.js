//eslint-disable-next-line
import { React } from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";




export function Logout() {
    const dispatch = useDispatch()
//   const dispatch = useDispatch()
    let history = useHistory()


    const action2 = {
        type:
            'ISLOGIN', payload: 0
    };
    dispatch(action2);
    //this.state
  //  localStorage.removeItem('LoggedUserName');
        history.push('/Login1');
    return null;
}

