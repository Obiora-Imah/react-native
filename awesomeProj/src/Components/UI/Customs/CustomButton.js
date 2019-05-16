import React from "react";
import {TouchableHighlight, View, Text, StyleSheet} from "react-native"

export default class CustomButton extends React.Component {

  render(){
    return(
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={[btnStyles.button, {backgroundColor: this.props.color}]}>
          <Text style={{color: this.props.fontColor}}>
            {this.props.children}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const btnStyles = StyleSheet.create({
  button: {
    width: "80%",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center"
  }
})
