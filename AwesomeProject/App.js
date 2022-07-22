/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  View,
  onPress,
  Image,
  ScrollView,
  BackHandler,
  Alert,
  DrawerLayoutAndroid

} from 'react-native';
import Component1 from './Component1';
import { useEffect, useRef, useState } from 'react';
import BasicComponent from './BasicComponent';
import Flatlistcomponent from './Flatlistcomponent';
import Datepicker from './Datepicker';
import Drawablelayout from './Drawablelayout';
import Progessbar from './Progressbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homescreen';
import Components from './Components';
import Progressbar from './Progressbar';
import Bottomsection from './Bottomsection';
import Othercomponents from './Othercomponents';
import BottomTabNavigator from './BottomTabNavigator';
import { Provider } from 'react-redux';
import { store } from './store';
// import Stackcomponent from './Stackcomponent';
const Stack = createNativeStackNavigator();
function App(navigation) {

  useEffect(() => {
    console.log("initial rendering")
  }, [])
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() }
  //     ]);
  //     return true;
  //   };

  // const backHandler = BackHandler.addEventListener(
  //   "hardwareBackPress",
  //   backAction
  // );
  //   return () => backHandler.remove();
  // }, []);

  // ------------------------------
  const backActionHandler = () => {
    Alert.alert("Alert!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "YES", onPress: () => BackHandler.exitApp()
          ()
      }
    ]);
    return true;
  };


  useEffect(() => {
    console.log("rendered")
    // Add event listener for hardware back button press on Android
    BackHandler.addEventListener("hardwareBackPress", backActionHandler);

    return () =>
      // clear/remove event listener
      BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
  }, []);


  // -----------------------------
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <>
     <Provider store={store}>
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    </Provider>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default App;
{/* <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
      <View style={styles.temp}></View>
    <ScrollView onResponderMove={() => { console.log('release') }}>
      <Component1 name={"nikhitha"} />
      // <BasicComponent/>
      <Drawablelayout drawerPosition={drawerPosition} drawer={drawer} changeDrawerPosition={changeDrawerPosition}/>
    </ScrollView>
</DrawerLayoutAndroid> */}