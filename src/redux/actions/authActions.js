//import { useState, useEffect } from 'react'


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
} from "./actionTypes";


import { auth } from "../../firebaseConfig"


export const registerStart = () => ({
  type: REGISTER_START,
})

export const registerSucces = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
})

export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
})

export const loginStart = () => ({
  type: LOGIN_START,
})

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
})

export const logoutStart = () => ({
  type: LOGOUT_START,
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

export const logoutFail = (error) => ({
  type: LOGOUT_FAIL,
  payload: error,
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
        dispatch(registerSucces({user}))
      })
      .catch((err) => dispatch(registerFail(err.message)))
  }
}

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart())
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
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
      .then((response) => dispatch(logoutSuccess()))
      .catch((err) => dispatch(logoutFail(err.message)))
  }
}