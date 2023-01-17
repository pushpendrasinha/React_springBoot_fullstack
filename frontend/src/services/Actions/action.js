import AuthService from "../AuthService";
import { REGISTER_SUCCESS, REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT } from "../Constants/constants";

export const register = (user) => (dispatch) => {
    return AuthService.register(user).then(
        (res) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            return Promise.resolve();
        },
        (error)=>{
            dispatch({
                type: REGISTER_FAIL,
            });
            return Promise.reject();
        }
    )
}

export const login = (user) => (dispatch) => {
    return AuthService.login(user).then(
        (res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload:  {user: res},
            });
            return Promise.resolve();
        },
        (error)=>{
            dispatch ({
                type: LOGIN_FAIL,
            });
            return Promise.reject();
        }
    )
}

export const logout = () => (dispatch) =>{
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    })
}