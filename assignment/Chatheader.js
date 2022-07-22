import React, { useState, useEffect } from "react"
import { View, Text, Button, Pressable, onPress, ActivityIndicator, FlatList, Image, ScrollView, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
function ChatHeader(props) {
    const [search, setsearch] = useState()
    const [show, setshow] = useState(false)
    return (
        <View>
           {!show&&<View style={{ height: 60, backgroundColor: "green", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                {props.arrow && <Pressable onPress={() => {setsearch("") ;props.navigation.navigate("Chat")}}>
                    <Icon name="arrow-left" color="white" size={25} style={{ margin: 0, padding: 0 }} />
                </Pressable>}
                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" ,marginLeft:10}}>WhatsApp</Text>
                <View style={{ flexDirection: "row",marginRight:20 }}>
                    <Pressable style={{ marginRight:20,marginTop:0 }} onPress={()=>setshow(!show)}>
                        <Icon name="search" color="white" size={25}  />
                    </Pressable>

                    {!props.arrow && <Pressable onPress={() => props.setshow(!props.show)}>
                        <Icon name="reorder" color="white" size={25} />
                    </Pressable>}
                </View>

            </View>}
            {show && <View style={{flexDirection:"row",backgroundColor:"white",height:60,elevation:10,margin:1}}>
            <Pressable onPress={() => setshow(!show)}>
                    <Icon name="arrow-left" color="grey" size={25} style={{ margin: 10, padding: 0 }} />
                </Pressable>
                <Pressable style={{ height: 40, backgroundColor: "white", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
                    {/* <Icon name="search" color="grey" size={15} style={{ margin: 5, marginLeft: 10 }} /> */}
                    <TextInput style={{ height: 40, width: "100%", fontSize: 20 ,marginTop:20}} value={search} onChangeText={(e) => { setsearch(e); props.dynamicsearch(e) }}placeholder="Search..." />
                </Pressable>
               
            </View>}

            {/* </View> */}
        </View>
    )
}
export default ChatHeader