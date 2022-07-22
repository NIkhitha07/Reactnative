import React, { useState, useEffect,useRef } from "react"
import { View, Button, Text, ScrollView, Image,StyleSheet } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, getPosts } from './Data';
import { faker } from "@faker-js/faker";
function Chats(props) {
    const scrollViewRef = useRef();
    return (
        <ScrollView ref={scrollViewRef}
         onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })} style={{backgroundColor: "#ECE5DD"}}>
            {props.chats.map((m)=>{
                if(m.id===props.id){
                 return m.chats.map((l) => {return <>
                    <View style={l.sender1==0?styles.receiverContainer:styles.senderContainer}>
                        {/* <View style={{ height: 60, width: 60, borderRadius: 40 }}>
                            <Image style={{ width: 60, height: 60, borderColor: "black", borderRadius: 40 }}
                                source={{ uri: l.sender1==0?props.image:props.profile.pictute.large }} />
                        </View> */}
                        <View style={l.sender1==0?styles.receiverMsg:styles.senderMsg}>
                            <Text style={[l.sender1==1?styles.receiverText:styles.senderText]}>{l.msg}</Text>
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
export default Chats;