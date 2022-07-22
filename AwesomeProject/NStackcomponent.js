import Homescreen from './Homescreen';
import Components from './Components';
import Progressbar from './Progressbar';
import Bottomsection from './Bottomsection';
import Othercomponents from './Othercomponents';
import BasicComponent from './BasicComponent';
import Flatlistcomponent from './Flatlistcomponent';
import Datepicker from './Datepicker';
import Drawablelayout from './Drawablelayout';
import Progessbar from './Progressbar';
import Component1 from './Component1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import {View,Text,Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Updatedetails from './Updatedetails';
function NStackcomponent(){
  const Stack = createNativeStackNavigator();
  return (
    
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} options={{
          headerTitle:"hello",
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          ),
        }}
             />
        <Stack.Screen name="Picker" component={Datepicker}  initialParams={{ itemId: 42 }} />
        <Stack.Screen name="Progress" component={Progressbar} />
        <Stack.Screen name="Components" component={Components} />
        <Stack.Screen name="Controls" component={Component1} />
        <Stack.Screen name="Basic" component={ BasicComponent} />
        < Stack.Screen name="Datepicker" component={Datepicker} />
        < Stack.Screen name="Othercomponents" component={Othercomponents} />
        < Stack.Screen name="Update" component={Updatedetails} />
        <Stack.Screen
          name="FlatList"
          component={Flatlistcomponent}
          options={{ title: 'Welcome' }}
        />
        {/* <Bottomsection/> */}
      </Stack.Navigator>
      
  )
}
export default NStackcomponent;