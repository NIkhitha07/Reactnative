import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { View, Text, Button, Pressable, onPress, ActivityIndicator, FlatList, Image, ScrollView, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { decrement, getPosts, increment, getchats } from './Data';
import { useSelector, useDispatch } from 'react-redux'
import Icon1 from 'react-native-vector-icons/AntDesign';
import Ex from "./Ex";
import ChatHeader from "./Chatheader";
import Profiles from "./Profiles";
function Newgroup(props) {
    const scrollViewRef = useRef();
    const [show, setshow] = useState(false)
    const [search, setsearch] = useState()
    const entities = useSelector((state) => state.data.entities)
    const profile = useSelector((state) => state.data.profile)
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const loading = useSelector((state) => state.data.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        var y = []
        if (loading == false)
            y = entities.map((l) => {
                return { ...l, show: false }
            })
        console.log(y, "hhjfhff")
        setFilteredDataSource(y);
    }, [loading])

    function dynamicsearch(text) {
        if (text) {
            const newdata = entities.filter((l) => {
                const user = l.name.title + '. ' + l.name.first + ' ' + l.name.last
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
    function checked(id) {
        let x = []
        x = filteredDataSource.map((l) => {
            if (l.uid == id) {
                return { ...l, show: !l.show }
            }
            return l
        })
        setFilteredDataSource(x)
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
            <View>
                {!show && <View style={{ height: 60, backgroundColor: "#128C7E", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Pressable onPress={() => props.navigation.navigate("Chat")}>
                            <Icon1 name="arrowleft" color="white" size={25} style={{ marginLeft: 10, padding: 0 }} />
                        </Pressable>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", marginLeft: 30 }}>New Group</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginRight: 20 }}>
                        <Pressable style={{ marginTop: 0 }} onPress={() => setshow(!show)}>
                            <Icon name="search" color="white" size={25} />
                        </Pressable>
                    </View>

                </View>}
                {show && <View style={{ flexDirection: "row", backgroundColor: "white", height: 60, elevation: 10, margin: 1 }}>
                    <Pressable onPress={() => { dynamicsearch(""); setsearch(""); setshow(!show) }}>
                        <Icon1 name="arrowleft" color="grey" size={25} style={{ margin: 10, marginTop: 13, padding: 0 }} />
                    </Pressable>
                    <Pressable style={{ height: 40, backgroundColor: "white", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
                        <TextInput style={{ height: 40, width: "100%", fontSize: 20, marginTop: 20 }} value={search} onChangeText={(e) => { setsearch(e); dynamicsearch(e) }} placeholder="Search..." />
                    </Pressable>

                </View>}
            </View>
            {loading ? <ActivityIndicator /> :
                <View style={{
                    flex: 6
                }}>
                    <View style={{ width: '100%' }}>
                        <ScrollView horizontal={true} ref={scrollViewRef}
                            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })} >
                            {filteredDataSource.map((l) => {
                                const img = l.pictute.medium
                                const user = l.name.first + ' ' + l.name.last
                                return (l.show == true && <View>
                                    <View style={{ margin: 5, }}>
                                        <Image style={{ width: 50, height: 50, borderColor: "black", borderRadius: 40,position: "relative" }}
                                            source={{ uri: img }} />
                                        {l.show && <Pressable
                                            style={{ position: "absolute", bottom: 0, right: 0 }}
                                            onPress={() => checked(l.uid)}
                                        >
                                            <Icon name="close" size={20} color="grey" />
                                        </Pressable>}
                                    </View>

                                    <Text style={{ size: 10, marginRight: 5 }}>{user}</Text>
                                </View>)
                            })}
                        </ScrollView>
                    </View>
                    <ScrollView style={{ marginLeft: 10 }}>
                        {filteredDataSource.map((l) => {
                            const user = l.name.title + '. ' + l.name.first + ' ' + l.name.last
                            const img = l.pictute.medium
                            return <Pressable onPress={() => { checked(l.uid) }}>
                                <View style={{ flexDirection: 'row', alignItems: "center", backgroundColor: "white", margin: 0 }}>
                                    <View style={{ height: 70, width: 70, borderRadius: 40, position: "relative" }}>
                                        <Image style={{ width: 70, height: 70, borderColor: "black", borderRadius: 40 }}
                                            source={{ uri: img }} />
                                    </View>
                                    {l.show && <View style={{ position: "absolute", backgroundColor: "#128C7E", padding: 6, borderRadius: 15, bottom: 20, left: 50 }}>
                                        <Icon name="check" size={15} color="white" />
                                    </View>}
                                    <Text style={{ fontSize: 20, margin: 30 }}>{user}</Text>
                                </View>
                            </Pressable>

                        })}
                    </ScrollView>
                </View>
            }
            <Pressable style={{ backgroundColor: "#128C7E", padding: 10, borderRadius: 30, position: "absolute", bottom: 20, right: 10 }} onPress={() => { setshow(false); props.navigation.navigate("groupDetails") }}>
                <Icon1 name="arrowright" size={30} color="white" />
            </Pressable>
        </View>
    )
}
export default Newgroup