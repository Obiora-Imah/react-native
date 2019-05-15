import {ADD_USER, DELETE_USER, SELECT_USER, UNSELECT_USER} from "./actionTypes";

export const addUser =(payload)=>{
  return {
    type: ADD_USER,
    payload: payload
  }
}

export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload: payload
  }
}
