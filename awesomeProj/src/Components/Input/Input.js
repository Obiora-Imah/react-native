import  React from "react";
import {View, Button, StyleSheet, TextInput} from "react-native"

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
      <View style={styles.fullWidth} >
        <TextInput
          style={styles.input}
          onChangeText={ this.changeEmailEventHandler }
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={ this.changePasswordEventHandler }
          placeholder="Password"
        />

        <View style={styles.containerButton}>
          <Button
            style={styles.submitBtn}
            title="Let's Go"
            color="#841584"
            onPress={this.subitStateObjHandler}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    width: "100%",
    marginTop: 20,
    color: "green",
    textAlign: 'center',
    borderColor: "blue",
    borderWidth: 1
  },

  fullWidth: {
    width: "100%"
  },

  submitBtn: {
    marginTop: '10%'
  },

  extraMargin: {
    marginTop: 10
  },

  containerButton: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20
  }
})

export default Input;
