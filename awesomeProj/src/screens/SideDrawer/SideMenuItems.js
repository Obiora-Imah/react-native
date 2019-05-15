import React from "react";
import {View, Text, TouchableHighlight} from "react-native"
import Icon from"react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import {Navigation} from "react-native-navigation"
import niceplacetoronto from "../../assets/images/niceplacetoronto.png";

// import {showMenu,hideMenu} from "../../store/actions"


class SideMenuItems extends React.Component {
  // componentDidMount(){
  //   Navigation.mergeOptions(this.props.componentId, {
  //     sideMenu: {
  //       left: {
  //         visible: true
  //       }
  //     }
  //   });
  // }

  render(){
    return(
      <View>
        <TouchableHighlight>
          <Text>
            <Icon name="ios-aperture" size={30} />
            Drive
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

export default connect(mapStateToProps)(SideMenuItems);
