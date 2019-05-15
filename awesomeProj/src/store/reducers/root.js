import {SELECT_USER, UNSELECT_USER, DELETE_USER, ADD_USER, SHOW_MENU, HIDE_MENU} from "../actions/actionTypes"
// import console = require("console");

const initialState ={
  users: [],
  selected: null,
  isVisible: false,
  visibleFun: (componentID) => {

  }
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case DELETE_USER:
      return {
        ...state,
        selected: null,
        users: state.users.filter((user) => user.key !== action.payload)
      }
    case SHOW_MENU:
      return {
        ...state,
        isVisible: true,
      }
    case HIDE_MENU:
      return {
        ...state,
        isVisible: false,
      }
    default:
      return state
  }
};

export default userReducer;
