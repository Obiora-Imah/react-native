import {SHOW_MENU, HIDE_MENU} from "./actionTypes";

export const showMenu =()=>{
  return {
    type: SHOW_MENU
  }
}

export const hideMenu =()=>{
  alert("oops")
  return {
    type: HIDE_MENU
  }
}
