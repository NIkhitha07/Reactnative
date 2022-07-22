import React from "react"
import {Text,View} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chatscreen from "./Chatscreen";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Icon from 'react-native-vector-icons/FontAwesome';
import Profilepage from "./Profilepage";
import Newgroup from "./Newgroup";
const Tab = createMaterialTopTabNavigator();
function Tabar() {
  return (
    <>
   
  </>
  );
}

function Mainpage(){
    return (
        <Tab.Navigator 
        // tabBar={()=><Tabar/>}
        
        >
        <Tab.Screen name="Chat" component={Chatscreen}  options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profilepage} />
        <Tab.Screen name="NewGroup" component={Newgroup} />
      </Tab.Navigator>
      // <View>
      //   <Chatscreen/>
      // </View>
      )
}
export default Mainpage