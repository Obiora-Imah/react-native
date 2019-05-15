import React from "react";
import {connect} from "react-redux";
import {Navigation} from "react-native-navigation";
import {View, Image, Button, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import niceplacetoronto from "../../assets/images/niceplacetoronto.png";
import {deleteUser} from "../../store/actions"


class UserDetail  extends React.Component{
  static navigatorButtons = {
    leftButtons: [
      {
         id: 'sideMenu',
         icon: niceplacetoronto
      }
    ]
  };
  deleteUserHandler = () => {
    this.props.deleteUser(this.props.user.key)
    Navigation.pop(this.props.componentId)
  }

  render(){
    return(
        <View style={styles.modalStyle}>
          <View>
            <Image source={this.props.user.image} style={styles.image}/>
            <Text style={styles.modalFont}>
              {this.props.user.email}
            </Text>
          </View>
          <View>
          {/* onPress={()=> props.onItemDeleted(props.user.key)} */}
            <TouchableOpacity style={styles.deleteButton} onPress={this.deleteUserHandler}>
                <Icon name="ios-trash" size={30}  backgroundColor="red"  />
            </TouchableOpacity>
          </View>
        </View>
    );
    }
}
export default connect(null,{
  deleteUser
})(UserDetail);


const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },

  modalStyle:{
    // marginTop: 0
  },

  btnDelete: {
    color: "red"
  },

  modalFont: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },

  deleteButton: {
    alignItems: "center",
    width: "100%"
  }
})
