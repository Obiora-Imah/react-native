import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import menuTabs from "../MainTabs/startMainTab"
import niceplacetoronto from "../../assets/images/niceplacetoronto.png";
export default class Auth extends Component{
  // static navigatorButtons = {
  //   leftButtons: [
  //     {
  //        id: 'sideMenu',
  //        icon: niceplacetoronto
  //     }
  //   ]
  // };
  logingHandler = () => {
    menuTabs()
  }
  render() {
    return(
      <View>
        <Text>
          {this.props.text}
        </Text>
        <Button title="Login" onPress={this.logingHandler} />
      </View>
    )
  }
}
