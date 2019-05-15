/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import ListItem  from "./src/Components/ListItem/ListItem"
import Input from "./src/Components/Input/Input";
// image import from local
import niceplacetoronto from "./src/assets/niceplacetoronto.png";
import UserDetail from "./src/Components/userDetail/UserDetails";
import {addUser,deleteUser, deselecUser, selectuser} from "./src/store/actions"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
class App extends Component {

  btnPress = (user) => {
    this.props.onAddUser(
      {
        email: user.email,
        password: user.password,
        key: Math.random().toString(),
        image: niceplacetoronto
      }
    )
  }

  selectHandler = (key) => {
    this.props.onSelectuser(key);
  }


  deleteHandler = (key) => {
    this.props.onDeleteUser(key);
  }

  closeModalHandler = () => {
    //
    this.props.onDeselectUser()
  }

  render() {
    return (
      <View style={styles.container} >
        <UserDetail
          selected={this.props.selected}
          onItemDeleted={this.deleteHandler}
          onModalClose={this.closeModalHandler}/>

        {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        {/* <Text >{this.state.placeName}</Text> */}
        <View style={styles.inPutContainer}>
          <Input btnPress={this.btnPress} />
          <ListItem
            users={this.props.users}
            onSelected={this.selectHandler}/>
        </View>
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: 'red'
  },

  inPutContainer: {
    width: "90%"
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    selected: state.users.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteUser: (key) =>dispatch(deleteUser(key)),
    onSelectuser: (key) => dispatch(selectuser(key)),
    onDeselectUser: () => dispatch(deselecUser()),
    onAddUser: (user) => dispatch(addUser(user))
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(App);
