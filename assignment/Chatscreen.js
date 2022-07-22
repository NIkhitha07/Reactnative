import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Button, Pressable, onPress, ActivityIndicator, Keyboard, TextInput, ScrollView, Image, Modal, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import { decrement, getPosts, increment, getchats } from './Data';
import { useSelector, useDispatch } from 'react-redux'
import Icon1 from 'react-native-vector-icons/AntDesign';
import Ex from "./Ex";
import ChatHeader from "./Chatheader";
import Profiles from "./Profiles";

function Chatscreen(props) {
    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    const [search, setsearch] = useState()
    const entities = useSelector((state) => state.data.entities)
    const profile = useSelector((state) => state.data.profile)
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const loading = useSelector((state) => state.data.loading)
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false);
    const obj = useSelector((state) => state.data.personalchats)
    // const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [k, setk] = useState();
    useEffect(() => {
        if (loading == false)
            setFilteredDataSource(entities);
    }, [loading, entities])

    function dynamicsearch(text) {
        console.log("dynamic search")
        if (text) {
            console.log(text, "text")
            const newdata = entities.filter((l) => {
                const user = l.name.title + '. ' + l.name.first + ' ' + l.name.last;
                if (user.toUpperCase().includes(text.toUpperCase())) {
                    return l
                }
            })
            setFilteredDataSource((old) => newdata)
        }
        else {
            setFilteredDataSource((old) => entities)

        }

    }
    return (
        <View>
            <View>
                {!show1 && <View style={{ height: 60, backgroundColor: "#128C7E", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", marginLeft: 10 }}>WhatsApp</Text>
                    <View style={{ flexDirection: "row", marginRight: 20 }}>
                        <Pressable style={{ marginRight: 20, marginTop: 0 }} onPress={() => { setshow1(!show1) }}>
                            <Icon name="search" color="white" size={25} />
                        </Pressable>
                        <Pressable onPress={() => setshow(!show)}>
                            <Icon2 name="dots-three-vertical" color="white" size={25} />
                        </Pressable>
                    </View>

                </View>}
                {show1 && <View style={{ flexDirection: "row", backgroundColor: "white", height: 60, elevation: 10, margin: 1 }}>
                    <Pressable onPress={() => { setsearch(""); dynamicsearch(""); setshow1(!show1) }}>
                        <Icon1 name="arrowleft" color="grey" size={25} style={{ margin: 10, marginTop: 14, padding: 0 }} />
                    </Pressable>
                    <Pressable style={{ height: 40, backgroundColor: "white", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
                        <TextInput style={{ height: 40, width: "100%", fontSize: 20, marginTop: 20 }} value={search} onChangeText={(e) => { setsearch(e); dynamicsearch(e) }} placeholder="Search..." />
                    </Pressable>

                </View>}

            </View>
            {show && <View style={{ zIndex: 10, width: 130, borderWidth: 5, borderColor: "white", height: 100, backgroundColor: "white", position: "absolute", right: 40, top: 50, justifyContent: "center", paddingLeft: 10, elevation: 20 }}>
                <View style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }} onPress={() => { setshow(!show); props.navigation.navigate("Profile") }}>Profile </Text>
                </View>
                <View style={{ alignItems: "flex-start", marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }} onPress={() => { setshow(!show); props.navigation.navigate("NewGroup") }}>New Group </Text>
                </View>


            </View>}
            {loading ? <ActivityIndicator /> :
                (<View style={{ marginLeft: 5 }}>
                    {/* <Profiles filteredDataSource={filteredDataSource} navigation={props.navigation} /> */}
                    <ScrollView>
                        {filteredDataSource.map((el) => {
                            var latest
                            obj.map((x) => {
                                if (el.uid == x.id) {
                                    latest = x.latest
                                    // console.log("latest", latest)r
                                }
                            })
                            //    console.log("filtereddata",filteredDataSource[0])
                            const user = el.name.title + '. ' + el.name.first + ' ' + el.name.last
                            const img = el.pictute.medium
                            const id = el.uid
                            return <View style={{ backgroundColor: "white" ,width:"100%",position:"relative"}}>
                                <View style={{ flexDirection: 'row', backgroundColor: "white", marginBottom: 10, paddingTop: 10 }}>
                                    <Pressable style={{ height: 70, width: 70, borderRadius: 40 }} onPress={() => { setk(img); setModalVisible(!modalVisible) }}>
                                        <Image style={{ width: 70, height: 70, borderColor: "black", borderRadius: 40 }}
                                            source={{ uri: img }} />
                                    </Pressable>
                                    <View style={{ flexDirection: "column", marginLeft: 10,justifyContent:"flex-start",alignItems:"flex-start" ,width:"100%"}}>
                                        {/* <View style={{}}> */}
                                        <Text style={{ fontSize: 20}} onPress={() => props.navigation.navigate("Room", {
                                            image: img,
                                            name: user,
                                            id: id
                                        })}>{user}</Text>
                                        <Text style={{position:"absolute",top:0,right:100}}>{latest.time}</Text>
                                        {/* </View> */}
                                        <Text numberOfLines={1} ellipsizeMode='tail'style={{width:"65%",height:20,flex:1 }} onPress={() => props.navigation.navigate("Room", {
                                            image: img,
                                            name: user,
                                            id: id
                                        })}>{latest.msg}</Text>
                                    </View>

                                </View>
                                <Modal
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        Alert.alert("Modal has been closed.");
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={[styles.modalView, { position: "relative" }]}>
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
                            </View>

                        })
                        }
                    </ScrollView>
                </View>)
            }
        </View>
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
export default Chatscreen