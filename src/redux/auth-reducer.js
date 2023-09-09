import { stopSubmit } from "redux-form"
import { api } from "../api/api"


const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state, ...action.payload,
            }
            default:
                return state
    }
}

export const setAuthUserDataSuccess = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:{userId, email, login, isAuth}})

export const setAuthUserData = () => async (dispatch) => {
    let response = await api.auth.setAuthUserData()
    if(response.resultCode === 0 ){
        let {id, email, login} = response.data
        dispatch(setAuthUserDataSuccess(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await api.auth.login(email, password, rememberMe)
    if(response.data.resultCode === 0 ){
        dispatch(setAuthUserData())
    }
    else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await api.auth.logout()
    if(response.data.resultCode === 0 ){
        dispatch(setAuthUserDataSuccess(null, null, null, false))
    }
}

export default authReducer
