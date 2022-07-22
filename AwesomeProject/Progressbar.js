import React from "react";
import {View,StyleSheet,Text} from "react-native";
import {ProgressBar} from '@react-native-community/progress-bar-android';
function Progressbar(){
    return(
        <View style={styles.container}>
        <View style={styles.example}>
          <Text>Circle Progress Indicator</Text>
          <ProgressBar />
        </View>
        <View style={styles.example}>
          <Text>Horizontal Progress Indicator</Text>
          <ProgressBar styleAttr="Horizontal" />
        </View>
        <View style={styles.example}>
          <Text>Colored Progress Indicator</Text>
          <ProgressBar styleAttr="LargeInverse" color="#2196F3" animating={true}/>
        </View>
        <View style={styles.example}>
          <Text>Fixed Progress Value</Text>
          <ProgressBar
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
          />
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    example: {
      marginVertical: 24,
    },
  });
export default Progressbar