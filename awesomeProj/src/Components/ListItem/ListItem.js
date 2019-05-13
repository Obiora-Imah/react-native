import React from "react";
import {Text, View, FlatList, StyleSheet, TouchableOpacity, Image} from "react-native";


const ListItem = (props) => {
  if(props.users.length < 1 || !props.users[0].email || !props.users[0].password){
    return <Text>Add Item To The List</Text>
  }

  return (
    <FlatList
      data={props.users}
      contentContainerStyle={itemStyle.containerButton}
      renderItem={(user) =>{
        // alert(user.item.image)
        return(
        <TouchableOpacity onPress={() => props.onSelected(user.item.key)}>
          <View style={itemStyle.item}>
            <Image source={user.item.image} style={itemStyle.imageStyle} />
            <Text >{ user.item.email }</Text>
          </View>
        </TouchableOpacity>

      )}
      }
    />
  )
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
