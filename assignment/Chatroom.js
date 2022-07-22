
import React, { useState, useEffect, useRef } from "react"
import { View, TextInput, Keyboard ,Image,Text,ScrollView,StyleSheet,Pressable} from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, getPosts, getchats, addtochat } from './Data';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
function Chatroom(props) {
    const scrollViewRef = useRef();
    const profile = useSelector((state) => state.data.profile)
    // const obj = useSelector((state) => state.data.chats)
    const obj = useSelector((state) => state.data.personalchats)
    const dispatch = useDispatch()
    const { image, name ,id} = props.route.params;
    const [toadd, settoadd] = useState()
    useEffect(() => {
        // console.log(chats, "chtas")
    }, [])
    function addto() {
        console.log(id,"addto")
        Keyboard.dismiss();
        settoadd("")
        var m = toadd;
        var today = new Date();
        var x = {
           toadd:{ msg: m,
            date: today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
            time: today.getHours() + ":" + today.getMinutes(),
            sender1: 1
            },
            id:id
        }
        dispatch(addtochat(x))
    }
    return (
        <View style={{ flex: 1,}}>
            <View style={{ height: 60, backgroundColor: "#128C7E", flexDirection: "row" ,alignItems:"center"}} >
                <Pressable onPress={() => props.navigation.navigate("Chat")}>
                    <Icon1 name="arrowleft" color="white" size={30}  style={{ margin: 0, padding: 0}} />
                </Pressable>
                <View style={{ height: 50, width: 50, borderRadius: 40,marginLeft:10,marginTop:10 }}>
                        <Image style={{ width: 40, height: 40, borderColor: "black", borderRadius: 40 }}
                            source={{ uri:image}} />
                    </View>
                <Text style={{fontSize:20,color:"white",margin:15}}>{name}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {/* <Chats chats={obj} image={image} profile={profile} id={id} /> */}
                <ScrollView ref={scrollViewRef}
         onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })} style={{backgroundColor: "#ECE5DD"}}>
            {obj.map((m)=>{
                if(m.id===id){
                 return m.chats.map((l) => {return <>
                    <View style={l.sender1==0?styles.receiverContainer:styles.senderContainer}>
                        <View style={l.sender1==0?styles.receiverMsg:styles.senderMsg}>
                            <Text style={l.sender1==1?styles.receiverText:styles.senderText}>{l.msg}</Text>
                            <View style={{ flexDirection: "row-reverse", marginLeft: 15 }}>
                                <Text style={{ color: "	#696969", fontSize: 13, marginBottom:2,  alignItems: "flex-end", justifyContent: "flex-end" }}>{l.date}{l.time}</Text>
                            </View>
                        </View>
                    </View>
                    </>
               })}
            }
             )}
        </ScrollView>

            </View>
            <View style={{ height: 70, borderColor: "black", flexDirection: "row", justifyContent: "center", alignItems: "center",backgroundColor:"#ECE5DD" }}>
                <View style={{ width: 320 }}>
                    <TextInput style={{ backgroundColor: "white", height: 40, borderRadius: 20 }} value={toadd} onChangeText={(e) => settoadd(e)} />
                </View>
                <Pressable style={{ marginLeft: 10,backgroundColor:"#128C7E",width:40,height:40,borderRadius:20,justifyContent:"center" ,alignItems:"center"}} onPress={() => addto(id)}>
                    <Icon3 name="send" color="white" size={20} style={{marginRight:0}} />
                </Pressable>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    senderContainer:{
        flexDirection: "row-reverse", 
        margin: 10, 
        justifyContent: "flex-start", 
        alignItems: "center"
    },
    senderMsg:{
        maxWidth: 300,
        minWidth:120, 
        backgroundColor: "white", 
        borderRadius: 20, 
        marginLeft: 5
    },
    receiverContainer:{
        flexDirection: "row", 
        margin: 10, 
        borderStartColor:"white",
        justifyContent: "flex-start", 
        alignItems: "center"
    },
    receiverMsg:{
        maxWidth: 300, 
        minWidth:120,
        // margin: 5,
        backgroundColor: "#DCF8C6",
         borderRadius: 20, 
         marginLeft: 5
    },
    senderText:{
        color: "black", fontSize: 18, 
        padding:10
        // margin: 5
    },
    receiverText:{
        color: "black", fontSize: 18,
         padding:10
    }
})
export default Chatroom