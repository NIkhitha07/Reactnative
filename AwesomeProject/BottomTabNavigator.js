import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "./Homescreen";
import Progressbar from "./Progressbar";
import NStackcomponent from "./NStackcomponent";
import Flatlistcomponent from "./Flatlistcomponent";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Nstack" component={NStackcomponent} />
      <Tab.Screen name="Flatlist" component={Flatlistcomponent}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;