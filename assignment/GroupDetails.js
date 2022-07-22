import { Faker } from "@faker-js/faker"
import { produceWithPatches } from "immer"
import React, { useState } from "react"
import { View, Button, TextInput, Text, Image, Pressable } from "react-native"
import faker from "@faker-js/faker"
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { useSelector, Dispatch, useDispatch } from "react-redux"
import { addgroup } from './Data'
function GroupDetails(props) {
    const entities = useSelector((state) => state.data.entities)
    const dispatch = useDispatch()
    const [name, setname] = useState(" ")

    const [description, setdescription] = useState()
    function creategroup() {
        let x
        if(name==" "){
            alert("Cannot create group")
        }
        else{
        x = {
            name: {
                first: "",
                last: name,
                title: ""
            },
            pictute: { medium: faker.image.avatar() },
            show: false,
            uid: name

        }
        dispatch(addgroup(x))

        props.navigation.navigate("Chat")}
    }
    return (
        <View style={{flex:1,justifyContent: "center", alignItems: "center",position:"relative"}}>
            <View  style={{position:"absolute",top:0,left:0,height:60,backgroundColor:"#128C7E",width:"100%",flexDirection:"row"}}>
            <Pressable onPress={() => props.navigation.navigate("NewGroup")} style={{margin:10,flexDirection:"row"}}>
                    <Icon1 name="arrowleft" color="white" size={25} style={{marginTop:1,padding:0}} />
                    <Text style={{marginLeft:10,marginTop:0,fontSize:20,color:"white"}}>Group details</Text>
                </Pressable>
               
            </View>
            <View style={{ flexDirection:"column",justifyContent: "center", alignItems: "center",elevation:20,backgroundColor:"white" ,padding:20}}>
                <View>
                    <Text style={{ fontSize: 25, color: '#128C7E' }}> Group name:</Text>
                    <View style={{ justifyContent: "center", alignItems: "center", margin: 5, width: 300 }}>
                        <View style={{ height: 50, width: "90%",borderBottomWidth:1, borderColor: "grey", borderRadius: 20 }}>
                            <TextInput value={name} onChangeText={(e) => setname(e)} style={{ paddingLeft: 15 }} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 25, color: '#128C7E' ,marginTop:30}}> Group Description:</Text>
                    <View style={{ justifyContent: "center", alignItems: "center", margin: 5, width: 300 }}>
                        <View style={{ height: 50, width: "90%", backgroundColor: "white",borderBottomWidth:1, borderColor: "grey", borderRadius: 20 }}>
                            <TextInput value={description} onChangeText={(e) => setdescription(e)} style={{ paddingLeft: 15 }} />
                        </View>
                    </View>
                </View>
                <Pressable style={{ width: 100, height: 50, backgroundColor: "#128C7E", justifyContent: "center", alignItems: "center", borderRadius: 20, margin: 10 }} onPress={() => creategroup()}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Create</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default GroupDetails;