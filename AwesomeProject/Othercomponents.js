import React from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet,Alert } from "react-native"
function Othercomponents() {
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    return (
        <View>
            <View style={[styles.container, styles.horizontal]}>
                <Text>Activity Indicator</Text>
                <ActivityIndicator animating={false} />
                <ActivityIndicator size="large" />
                <ActivityIndicator size="small" color="#0000ff" />
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
            <View style={[styles.container, styles.horizontal]}>
                <Text>Alert</Text>
                <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
                <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        justifyContent: "center",
        borderWidth: 3,
        margin: 10,
        //   height:400
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
export default Othercomponents