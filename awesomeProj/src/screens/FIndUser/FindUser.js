import React from "react";
import {View, Text} from "react-native";
import {Navigation} from "react-native-navigation";
import {connect} from "react-redux";
import ListItem  from "../../Components/ListItem/ListItem"
import niceplacetoronto from "../../assets/images/niceplacetoronto.png";

class FindUser extends React.Component {
  userSelectHandler =  (props) => {
    // console.log(props)
     Navigation.push(this.props.componentId, {
      component: {
        id: "UserDetail",
        name: "awesomeproject.UserDetail",
        title: "User Detail",
        passProps:{
          user: props.item
        },
        options: {
          topBar: {
            visible: true,
            title: {
              height: 70,
              alignment: 'center',
              text: "Detail"
            }
          }
        }
      }
    })
  }
  render() {
    // alert(this.props.users)
    return(
      <View>
        <ListItem users={this.props.users} showUser={this.userSelectHandler}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    selected: state.users.selected
  }
}

export default connect(mapStateToProps)(FindUser)
