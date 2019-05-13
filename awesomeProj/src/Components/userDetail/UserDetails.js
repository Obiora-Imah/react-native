import React from "react";
import {Modal, View, Image, Button, Text, StyleSheet} from "react-native"

const UserDetail = props => {
  let modalContent = null;
  if(props.user) {
    modalContent = (
      <View>
        <Image source={props.user.image} style={styles.image}/>
        <Text style={styles.modalFont}>
          {props.user.email}
        </Text>
      </View>
        )
  }
  return(<Modal
    visible={props.user !== null}
    animationType="slide"
    onRequestClose={props.onModalClose}>
    <View style={styles.modalStyle}>
    {modalContent}
      <View>
        <Button title="Close" onPress={props.onModalClose} />
        <Button title="Delete me" color="red" onPress={()=> props.onItemDeleted(props.user.key)}/>
      </View>
    </View>
  </Modal>);
}

export default UserDetail;


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
  }
})
