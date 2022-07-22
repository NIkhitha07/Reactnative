import React from "react"
import {View,Text,Button,TouchableOpacity,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomTabNavigator from "./BottomTabNavigator";
import { useDispatch, useSelector } from 'react-redux';

function Homescreen(props){
    const  x  = useSelector((state) => state.message);
    return (
        <View style={{display:"flex", flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
            <Text style={{fontSize:40,fontWeight:"bold",color:"black"}}>Welcome {x.message}!</Text>
            <View style={{flex:1,justifyContent:"center"}}>
            <Image source={require('./src/gaming.png')} style={{width:400,height:300}}/>
            </View>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Components')}}>
            <View style={ {width:300,backgroundColor:"#AD40AF",flexDirection:"row",justifyContent:"space-between",padding:10,marginBottom:50}}>
                <Text style={{color:"white"}}>Let's begin</Text>
                <View>
                <Icon name="angle-right" size={22} color="white"/>
                </View>
                
            </View>
            </TouchableOpacity>
            {/* <BottomTabNavigator/> */}
        </View>
    )
}
export default Homescreen