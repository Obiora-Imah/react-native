import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
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
      <TouchableOpacity onPress={this.showSideMenu}>
        <View style={styles.item}>
          <Icon name="ios-menu" size={30} />
          <Text style={styles.menuText}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    marginTop: 10
  },
  menuText: {
    color: "#000",
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 20
  }
})

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
