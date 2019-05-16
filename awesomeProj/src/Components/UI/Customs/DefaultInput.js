import React from "react";
import {TextInput} from "react-native";
import Styles from "../../../assets/styles/styles"

export default class DefaultInput extends React.Component {

  render(){
    return(
      <TextInput style={Styles.input} {...this.props} />
    )
  }
}

