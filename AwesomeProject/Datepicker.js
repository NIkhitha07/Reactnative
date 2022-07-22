import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, onPress,Button } from "react-native";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
function Datepicker(props) {
  const [date, setDate] = useState('09-10-2020');
  const [show, setshow] = useState(false);
  const { itemId, otherParam } = props.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title} onPress={() => setshow(!show)}>
          Show DateTimePicker
        </Text>
        <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
        {show && <DateTimePicker
          style={styles.datePickerStyle}
          value={new Date()}
          mode="date" // The enum of date, datetime and time
          maximumDate={new Date(30, 4, 2022)}
          // maximumDate={new Date(2022, 4, 28)} 
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        // display="spinner"

        />}
         <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
    </SafeAreaView>
  )
}
export default Datepicker
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});