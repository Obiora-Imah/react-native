import  React from "react";
import {View, Button, StyleSheet, TextInput} from "react-native"
import DefaultInput from "../UI/Customs/DefaultInput"
import CustomButton from "../UI/Customs/CustomButton"

class Input extends React.Component{
  state = {
    email: "",
    password: ""
  };

  subitStateObjHandler = () => {
    if(this.state.email.trim() === "" || this.state.password.trim() === "") {
      return;
    }

    this.props.btnPress({email: this.state.email, password: this.state.password});
  }

  changeEmailEventHandler = (val) => this.setState({email: val});
  changePasswordEventHandler = (val) => this.setState({password: val});

  render() {
    return (
      <View style={Styles.inputContainer}>
        <DefaultInput
          onChangeText={ this.changeEmailEventHandler }
          placeholder="Email"
        />
        <DefaultInput
          onChangeText={ this.changePasswordEventHandler }
          placeholder="Password"
        />
        <View style={Styles.containerButton}>
          <CustomButton  onPress={this.subitStateObjHandler} color="skyblue" fontColor="#fff">
            Submit
          </CustomButton>
        </View>
      </View>
    )
  }
}

export default Input;
