import React from "react";
import {Text, View, FlatList, StyleSheet, TouchableOpacity, Image} from "react-native";


class ListItem extends React.Component{

  render(){
    if(this.props.users.length < 1 ){
      return <Text>Add Item To The List</Text>
    }
    return (
      <FlatList
        data={this.props.users}
        contentContainerStyle={itemStyle.containerButton}
        renderItem={(user) =>{
          return (
            <TouchableOpacity onPress={() => this.props.showUser(user)}>
              <View style={itemStyle.item}  >
                <Image source={user.item.image} style={itemStyle.imageStyle} />
                <Text >{ user.item.email }</Text>
              </View>
            </TouchableOpacity>
        )}
        }
      />
    )

  }
}

const itemStyle = StyleSheet.create({
  item: {
    width: "100%",
    color: "#fff",
    padding: 2,
    backgroundColor: "grey",
    marginBottom: 10,
    flexDirection: "row",
    alignContent: "center"
  },

  containerButton: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 50
  },

  itemText: {
    color: "#fff",
    marginTop: 3
  },

  imageStyle: {
    height: 30,
    width: 30,
    marginRight: 10
  }
});

export default ListItem
