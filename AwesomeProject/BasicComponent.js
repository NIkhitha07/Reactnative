import React from "react"
import { useState } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Button,
    View,
    onPress,
    Image,
    ScrollView
  
  } from 'react-native';
function BasicComponent() {
    const navRef = React.useRef(null);
    return (
        <View>
            <View style={{height: 100,width: 300,backgroundColor: 'yellow', color: 'pink'}} >
                <View style={{ height: 501, width: 50 }}>
                    <Text>hello</Text>
                </View>
                <Text >
                    Hello World Nikki
                </Text >
            </View>
            <View accessible={false} accessibilityLabel="Go back"
                accessibilityHint="Navigates to the previous screen">
                <Text style={styles.text}>
                    View divison  2
                </Text>
            </View>
            <TouchableOpacity
                accessible={true}
                accessibilityLabel="Tap me!"
                accessibilityHint="Navigates to the previous screen"
                onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Press me!</Text>
                </View>
                {/* <Image source={{uri:'https://reactjs.org/logo-og.png'}}
                    style={{width: 400, height: 600}}/> */}
            </TouchableOpacity>
            <View style={styles.imgView}>
                {/* <Image resizeMode="contain" blurRadius={0}  source={{uri:'https://reactjs.org/logo-og.png'}}  style={{width: 100, height: 100}}  /> */}
                <Image resizeMode="repeat" blurRadius={0} source={require('./src/img.jpg')} />
            </View>
            <Text style={{ color: 'green' }}>Module css</Text>
            <View style={styles.button}>
                <Button
                    onPress={() => alert("hello")}
                    title="Learn More"
                    // disabled={true}
                    // nextFocusDown={navRef}
                // color="#841584"

                />
                <View ref={navRef}><Text>text below</Text></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        backgroundColor: 'blue',
        width: 200,
        fontSize: 50
    },
    imgView: {
        width: 300,
        height: 300,
        // color:'black',
        backgroundColor: 'yellow'
    },
    button: {
        width: 300,
        color: 'red'
    }
});
export default BasicComponent;