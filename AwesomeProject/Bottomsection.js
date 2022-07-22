import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import {View,Text,Button} from "react-native";
const Tab = createBottomTabNavigator();
function Bottomsection(){
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    )
}
export default Bottomsection