import { auth } from "../../firebaseConfig";

import { 
  LOGIN_START,
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT_START,
  LOGOUT_SUCCESS, 
  LOGOUT_FAIL, 
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_USER,
} from "./actionTypes";



const registerStart = () => ({
  type: REGISTER_START,
})

const registerSucces = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
})

const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
})

const loginStart = () => ({
  type: LOGIN_START,
})

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
})

const logoutStart = () => ({
  type: LOGOUT_START,
})

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

const logoutFail = (error) => ({
  type: LOGOUT_FAIL,
  payload: error,
})


export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
})

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart())
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName
        })
        dispatch(registerSucces(user))
      })
      .catch((err) => dispatch(registerFail(err.message)))
  }
}

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart())
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user })  => {
        dispatch(loginSuccess(user))
      })
      .catch((err) => dispatch(loginFail(err.message)))
  }
}

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart())
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
      .catch((err) => dispatch(logoutFail(err.message)))
  }
}