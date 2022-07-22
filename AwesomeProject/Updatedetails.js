import React, { useState} from "react"
import {View,Text,TextInput,StyleSheet,Button,onPress,Pressable} from "react-native"
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {useSelector,useDispatch} from "react-redux"
import { setMessage } from "./infoslice";
function Updatedetails(props){
    const dispatch = useDispatch();
    const  x  = useSelector((state) => state.message);
    const [username,setusername]=useState(x.message)
    function setdetails(){
        dispatch(setMessage(username))
        props.navigation.navigate("Home")
    }
    return <>
        <View>
            <Text>Welcome {x.message} </Text>
            <View>
                <TextInput  style={styles.input} value={username}  onChangeText={setusername}/>
            </View>
            <Pressable style={styles.button}  onPress={setdetails}>
                <Text style={{fontSize:20,color:"white"}}> Save Details</Text>
             </Pressable>
        </View>
    </>
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10
    },
    button:{
        width:150,
        height:50,
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'blue',
        alignItems:"center",
        justifyContent:"center",
        borderColor:"white"
    }
})
export default Updatedetails