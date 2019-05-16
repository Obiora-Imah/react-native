import React, {Component} from "react";
import {View, Text, Button, TextInput, StyleSheet, ImageBackground} from "react-native";
import menuTabs from "../MainTabs/startMainTab"
import DefaultInput from "../../Components/UI/Customs/DefaultInput"
import background from "../../assets/images/background.jpg"
import CustomButton from "../../Components/UI/Customs/CustomButton"

class Auth extends Component{

  logingHandler = () => {
    menuTabs()
  }
  render() {
    return(
      <ImageBackground source={background} style={inStyles.backgroundImage}>
        <View style={Styles.container}>
          <Text style={Styles.headerText} >Please Login</Text>
          <View style={{width: "100%", paddingLeft: "13%"}}>
            <CustomButton  onPress={this.logingHandler} color="skyblue" fontColor="#fff">
              Switch to Login
            </CustomButton>
          </View>
          <View style={Styles.inputContainer}>
            <DefaultInput placeholder="email"  />
            <DefaultInput placeholder="password"  />
            <DefaultInput placeholder="confirmPassword" />
          </View>
          <CustomButton  onPress={this.logingHandler} color="skyblue" fontColor="#fff">
            Submit
          </CustomButton>
        </View>
      </ImageBackground>
    )
  }
}


export default Auth;

const inStyles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    flex: 1
  }
})
