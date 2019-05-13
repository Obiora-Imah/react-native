/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import ListItem  from "./src/Components/ListItem/ListItem"
import Input from "./src/Components/Input/Input";
// image import from local
import niceplacetoronto from "./src/assets/niceplacetoronto.png";
import UserDetail from "./src/Components/userDetail/UserDetails"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  state = {
    users: [],
    selected: null
  };

  btnPress = (props) => {
    this.setState(preState => {
      return { users: [...preState.users, {
        email: props.email,
        password: props.password,
        key: Math.random().toString(),
        image: niceplacetoronto
        // image: {
        //   uri: "https://cdn.vox-cdn.com/uploads/chorus_image/image/62531890/buca-toronto.0.0.0.0.0.png"
        // }
        }
      ]}
    })
  }

  selectHandler = (key) => {
    this.setState(prevState => {
      return {
        selected: prevState.users.find((user) => user.key === key),
        // users: prevState.users.filter((user) => user.key !== key)
      }
    })

  }


  deleteHandler = (key) => {
    this.setState(prevState => {
      return {
        selected: null,
        users: prevState.users.filter((user) => user.key !== key)
      }
    })
  }

  closeModalHandler = () => this.setState({selected: null})

  render() {
    return (
      <View style={styles.container} >
        <UserDetail
          user={this.state.selected}
          onItemDeleted={this.deleteHandler}
          onModalClose={this.closeModalHandler}/>

        {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        {/* <Text >{this.state.placeName}</Text> */}
        <View style={styles.inPutContainer}>
          <Input btnPress={this.btnPress} />
          <ListItem
            users={this.state.users}
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
