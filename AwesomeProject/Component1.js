import React from "react"
import { useState } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Switch,

} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from 'react-native-slider';
function Component1(props) {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = "This is not really a bird nest.";
    const [number, onChangeNumber] = React.useState(null);
    const [isEnabled, setIsEnabled] = useState(false);
     const toggleSwitch = async() => { 
        const  x = await setIsEnabled(isEnabled=> !isEnabled);
        console.log("switch",isEnabled);
    }

    const onPressTitle = () => {
        setTitleText("Bird's Nest [pressed]");
        console.log("switch dhsgfgghs",isEnabled);
    };
    const [selectedValue, setSelectedValue] = useState("java");
    const [value, setvalue] = useState(2)
    return (<>
        <Text style={styles.titleText}  >
            <Text onPress={onPressTitle} selectable={true}>
                {titleText} ti
                {"\n"}
                {"\n"}
            </Text>
            <Text style={styles.baseText} allowFontScaling={false}>bosy text{bodyText}</Text>
            <Text>
            </Text>
        </Text>
        <View>
            <Text allowFontScaling={false} adjustsFontSizeToFit numberOfLines={1} style={{ fontSize: 80 }}>This text will fit the width of the containerggsfhsgggggggggggggggggggggggggggggggggggggggggggggggggg</Text>
        </View>
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
            // placeholder="useless placeholder"
            // keyboardType="numeric"
            // multiline={true}
            // editable={false}
            // defaultValue='nik'
            // selectionColor='red'
            // disableFullscreenUI={true}
            // selectTextOnFocus={true}
            // textAlign = "center"
            />
        </View>
        <Text>name is {props.name}</Text>
        <Picker
            mode="dropdown"
            prompt="nikhitha"
            onFocus={() => { console.log("onfocus") }}
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            itemStyle={{ color: 'red', backgroundColor: 'blue', fontSize: 40 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Slider
            value={value}
            maximumValue={100}
            minimumValue={1}
            minimumTrackTintColor="red"
            maximumTrackTintColor="white"
            thumbTintColor='blue'
            step={1}
            onValueChange={(v) => setvalue(v)}
        />
        <Text>Value: {value}</Text>
        <Switch
        trackColor={{ false: "green", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "red"}
        // ios_backgroundColor="#3e3e3e"
        // disabled={true}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </>)
};
const styles = StyleSheet.create({
    input: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    baseText: {
        fontFamily: "Cochin",
        fontSize: 20

    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'red'

    }
});
export default Component1