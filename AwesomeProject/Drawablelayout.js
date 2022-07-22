import React from "react";
import {View,Text,DrawerLayoutAndroid,StyleSheet,Button} from "react-native";
import {useRef,useState} from "react";
function Drawablelayout(props){
  
    return (
        <View>
      
          <View style={styles.container}>
          <Text style={styles.paragraph}>
            Drawer on the {props.drawerPosition}!
          </Text>
          <Button
            title="Change Drawer Position"
            onPress={() => {console.log("hi");props.changeDrawerPosition()}}
          />
          <Text style={styles.paragraph}>
            Swipe from the side or press button below to see it!
          </Text>
          <Button
            title="Open drawer"
            onPress={() => props.drawer.current.openDrawer()}
          />
        </View>
        
     
        </View>
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
export default Drawablelayout