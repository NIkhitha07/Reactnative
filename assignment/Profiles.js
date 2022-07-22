import React, { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Button, Pressable, onPress, ScrollView, Image, Text, Modal, StyleSheet } from "react-native"
function Profiles(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [k, setk] = useState();
    
    return (

        <ScrollView>
            {/* {[1,2,3].map((el)=>{
                console.log(el,892932);
            })} */}
            {[...props.filteredDataSource].map((el) => {
               console.log("filtereddata",props.filteredDataSource[0])
                const user = el.name.title + '. ' + el.name.first + ' ' + el.name.last
                const img = el.pictute.medium
                const id=el.uid
                return <View>
                    {/* <Pressable onPress={() => props.navigation.navigate("Room", {
                    image: img,
                    name: user
                })}> */}
                    <View style={{ flexDirection: 'row', alignItems: "center", backgroundColor: "white", margin: 0 }}>
                        <Pressable style={{ height: 70, width: 70, borderRadius: 40 }} onPress={() => { setk(img); setModalVisible(!modalVisible) }}>
                            <Image style={{ width: 70, height: 70, borderColor: "black", borderRadius: 40 }}
                                source={{ uri: img }} />
                        </Pressable>
                        <Text style={{ fontSize: 20, margin: 30 }} onPress={() => props.navigation.navigate("Room", {
                            image: img,
                            name: user,
                            id: id
                        })}>{user}</Text>
                    </View>
                    <Modal
                        // animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={[styles.modalView,{position:"relative"}]}>
                                <View style={{ height: 200, width: 200, borderRadius: 40 }}>
                                    <Image style={{ width: 200, height: 200, borderColor: "black", borderRadius: 40 }}
                                        source={{ uri: k }} />
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
                    {/* </Pressable> */}
                </View>

            })
        }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        position: "absolute",
        flex: 1,
        //   justifyContent: "center",
        //   alignItems: "center",
        //   marginTop: 22
    },
    modalView: {
        position: "relative",
        top: 100,
        left: 70,
        width: 250,
        height: 250,
        backgroundColor: "white",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default Profiles