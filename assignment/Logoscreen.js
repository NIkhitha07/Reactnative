import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {View,Text,Image,StyleSheet} from "react-native"
import FirstScreen from "./FirstScreen";

function Logoscreen(props){
    function switchto(){
        setTimeout(() => {
            console.log("hello")
            props.navigation.navigate("Login")
        }, 2500)
    }
    return(<>
    <View style={styles.container}>
        <Image source={require('./src/img.png')} style={{width:400,height:320}}/>
        {function hii(){
            switchto()
        }()}
    </View>
    </>)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
        
    }
})
export default Logoscreen