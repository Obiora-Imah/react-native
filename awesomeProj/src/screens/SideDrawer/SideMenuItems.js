import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native"
import Icon from"react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import {Navigation} from "react-native-navigation"

class SideMenuItems extends React.Component {
  menus = () => {
    return(
      <FlatList
        data={[{name: "Payments", key: "1"}, {name: "Rides", key: "2"}]}
        contentContainerStyle={styles.containerButton}
        renderItem={(menu) =>{
          return (
            <TouchableOpacity>
              <View style={styles.item}>
                {/* <Image source={user.item.image} style={itemStyle.imageStyle} /> */}
                <Icon name="ios-aperture" size={30} />
                <Text style={styles.menuText} >{ menu.item.name }</Text>
              </View>
            </TouchableOpacity>
        )}
        }
      />
    )
  }

  render(){
    return(
      <View style={styles.sideBar}>
        <View style={styles.innerView}>
          {this.menus()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sideBar: {
    flex: 1,
    width: "80%",
    backgroundColor: "steelblue"
  },

  innerView: {
    padding: 20
  },
  containerButton: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  item: {
    width: "100%",
    color: "#fff",
    padding: 2,
    marginBottom: 15,
    flexDirection: "row",
    alignContent: "center"
  },

  menuText: {
    color: "#000",
    paddingTop: 5,
    paddingLeft: 10
  }
})

const mapStateToProps = state => {
  return {
    visible: state.users.isVisible
  }
}

export default connect(mapStateToProps)(SideMenuItems);
