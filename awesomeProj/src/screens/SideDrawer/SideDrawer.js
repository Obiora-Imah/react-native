import React from "react";
import {View, Text, TouchableHighlight} from "react-native"
import Icon from"react-native-vector-icons/Ionicons";
import {Navigation} from "react-native-navigation";
import {connect } from "react-redux";

import {showMenu,hideMenu} from "../../store/actions"

class SideDrawer extends React.Component {
  showSideMenu = ()=>{
    Navigation.mergeOptions("SideMenuItems", {
      sideMenu: {
        left: {
            visible: true
        }
      }
    });
  }
  render(){
    return(
      <View>
        <TouchableHighlight onPress={this.showSideMenu}>
          <Text>
            <Icon name="ios-menu" size={30} />
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}



const mapStateToProps = state => {
  return {
    visible: state.users.isVisible
  }
}

mapPropsToAction = (dispatch) => {
  return {
    onMenuhow: () => dispatch(showMenu())
  }
}

export default connect(mapStateToProps, mapPropsToAction)(SideDrawer)
