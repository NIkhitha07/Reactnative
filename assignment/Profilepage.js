import React, { useState } from "react"
import { View, Text, Button, Image, StyleSheet, TextInput, Modal, KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useSelector, useDispatch } from 'react-redux'
import { updatename, updatenumber, updatepicture } from './Data'
// import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
// import *  as ImagePicker from "react-native-image-picker";
import * as ImagePicker from 'react-native-image-picker';
// import {launchImageLibrary,ImagePicker} from 'react-native-image-picker'
function Profilepage(props) {
  const profile = useSelector((state) => state.data.profile)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setstatus] = useState({ status: "available", disabled: false });
  const [name, setname] = useState({ name: profile.name.last + " " + profile.name.first, disabled: false })
  const [number, setnumber] = useState({ number: "available", disabled: false })
  const [resource, setresource] = useState({})
  const [k, setk] = useState(false)
  function cameraLaunch() {
    setModalVisible(!modalVisible)
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
      setModalVisible(!modalVisible)

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        setk(true)
        setresource({
          filePath: response,
          fileData: response.data,
          fileUri: response.assets[0].uri
        });
        dispatch(updatepicture(response.assets[0].uri))
        console.log(response.assets[0].uri)
      }
    });
  }
  function launchImageLibrary() {
    setModalVisible(!modalVisible)
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        setresource({
          filePath: response,
          fileData: response.data,
          fileUri: response.assets[0].uri
        });
        dispatch(updatepicture(response.assets[0].uri))
        console.log(response.assets[0].uri)
      }
    });

  }
  
  return (
   
    <KeyboardAvoidingView style={{ flex: 1,  position: "relative" }} behavior="position">
      <View style={{ position: "relative" }}> 
      <View style={{ position: "absolute",  left: 0, height: 50, backgroundColor: "#128C7E", width: "100%", flexDirection: "row" }}>
        <Pressable onPress={() => props.navigation.navigate("Chat")} style={{ margin: 10, flexDirection: "row" }}>
          <Icon1 name="arrowleft" color="white" size={25} style={{ margin: 0, padding: 0 }} />
          <Text style={{ marginLeft: 10, marginTop: 0, fontSize: 20, color: "white" }}>Profile</Text>
        </Pressable>
      </View>
      
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" ,marginTop:100}}>
          <View style={{ height: 250, width: 250, flexDirection: "row" }}>
            <Image source={{ uri: profile.pictute.large }} style={{ width: 250, height: 250, borderRadius: 150 }} />
            <Pressable style={{ position: "absolute", bottom: 20, right: 10, backgroundColor: "#128C7E", padding: 15, borderRadius: 30 }} onPress={() => setModalVisible(true)}>
              <Icon name="camera" size={30} color="white" />
            </Pressable>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            dismiss={() => setModalVisible(!modalVisible)}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
                  <Text style={{ fontSize: 20, color: "black", fontWeight: "400", marginBottom: 10 }}> Profile photo</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Pressable onPress={() => launchImageLibrary()} style={{ justifyContent: "center", alignItems: "center", margin: 10 }}>
                    <Icon name="image" size={25} color="green" style={{ marginRight: 10 }} />
                    <Text style={styles.modalText}>Gallery</Text>
                  </Pressable>
                  <Pressable style={{ justifyContent: "center", alignItems: "center", margin: 10 }} onPress={() => cameraLaunch()}>
                    <Icon name="camera" size={25} color="green" style={{ marginRight: 10 }} />
                    <Text style={styles.modalText}>camera</Text>
                  </Pressable>
                </View>
                <Pressable
                  style={{ position: "absolute", top: 10, right: 10, marginBottom: 10 }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Icon name="close" size={20} color="grey" />
                </Pressable>
              </View>
            </View>
          </Modal>
          {name.disabled == false ? <Text style={[styles.feilds, { fontSize: 25, color: "black" }]}>{name.name}</Text> : <TextInput style={[styles.feilds, { fontSize: 25 }]} value={name.name} editable={name.disabled} onChangeText={(e) => { setname({ name: e, disabled: name.disabled }); }} />}
          <Pressable style={styles.icon} onPress={() => {
            if (name.disabled == false) { setname({ name: name.name, disabled: !name.disabled }) }
            else {
              setname({ name: name.name, disabled: !name.disabled })
              var x = {
                first: " ",
                last: name.name,
                title: " "
              }
              dispatch(updatename(x))
            }
          }}>
            <Icon name="pencil" color="#128C7E" size={20} />
          </Pressable>
          {number.disabled == false ? <Text style={[styles.feilds, { fontSize: 25, color: "black" }]}>{number.number}</Text> : <TextInput style={[styles.feilds, { fontSize: 25 }]} value={number.number} editable={number.disabled} onChangeText={(e) => { setnumber({ number: e, disabled: number.disabled }); }} />}
          <Pressable style={styles.icon} onPress={() => {
            if (number.disabled == false) { setnumber({ number: number.number, disabled: !number.disabled }) }
            else {
              setnumber({ number: number.number, disabled: !number.disabled })
              dispatch(updatenumber(number.number))
            }
          }}>
            <Icon name="pencil" color="#128C7E" size={20} />
          </Pressable>
          <Text style={[styles.feilds, { fontSize: 25, color: "black" }]}>{profile.number}</Text> 

        </View>
      </View>
      </View>
      {/* </Pressable> */}
    </KeyboardAvoidingView>

  )
}
const styles = StyleSheet.create({
  feilds: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    width: 350,
    height: 50,
    backgroundColor: "white",
    borderRadius: 20
  },
  centeredView: {
    flex: 1,
    position: "relative",
    marginTop: 22,
    alignItems: "center",
    
  },
  modalView: {
    backgroundColor:"white",
    position: "absolute",
    // margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    padding: 30,
    height: 150,
    width: "98%",
    bottom: 0,
    elevation: 30,

    // alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15,
    color: "black"
  },
  icon: {
    position: "relative",
    top: -50,
    right: -140
  }
})
export default Profilepage