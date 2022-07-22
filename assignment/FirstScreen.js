import React,{useEffect,useState} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage";
import Chatroom from "./Chatroom";
import Chatscreen from "./Chatscreen";
import Profilepage from "./Profilepage";
import Newgroup from "./Newgroup";
import { getmainpost,getPosts,getchats} from './Data';
import { useSelector, useDispatch } from 'react-redux'
import Logoscreen from "./Logoscreen";
import GroupDetails from "./GroupDetails";
function FirstScreen() {
    const dispatch = useDispatch()
    const Stack = createNativeStackNavigator();
    useEffect(()=>{
        console.log("first screen")
        dispatch(getmainpost())
        dispatch(getPosts())
        dispatch(getchats())
      },[])
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={Logoscreen}
                // component={Chatscreen}
                // component={Loginpage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Loginpage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Main"
                component={Mainpage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Room"
                component={Chatroom}
                options={{headerShown: false}}
            />
            <Stack.Screen name="Chat" component={Chatscreen} options={{headerShown:false}} />
            <Stack.Screen name="Profile" component={Profilepage}   options={{headerShown: false}}/>
            <Stack.Screen name="NewGroup" component={Newgroup} options={{headerShown:false}}/>
            <Stack.Screen name="groupDetails" component={GroupDetails} 
            options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default FirstScreen