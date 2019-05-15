import React from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";

import {addUser,deleteUser} from "../../store/actions"
import niceplacetoronto from "../../assets/images/niceplacetoronto.png";
import Input from "../../Components/Input/Input"

class SharedSpace extends React.Component {
  static navigatorButtons = {
    leftButtons: [
      {
         id: 'sideMenu',
         icon: niceplacetoronto
      }
    ]
  };
  addUserProp = (user) => {
    this.props.onAddUser(
      {
        email: user.email,
        password: user.password,
        key: Math.random().toString(),
        image: niceplacetoronto
      }
    )
  }
  render = () => {
    return(
      <View>
        <Input  btnPress={this.addUserProp}/>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteUser: (key) =>dispatch(deleteUser(key)),
    onAddUser: (user) => dispatch(addUser(user))
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    selected: state.users.selected
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SharedSpace)
