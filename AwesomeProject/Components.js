import React from "react"
import {View,Text,Button,TouchableOpacity,ScrollView} from "react-native"
function Components(props){
    return(
        <ScrollView>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('FlatList')}>
                <View style={{height:200,width:200,borderColor:"green",borderRadius:20,borderWidth:2,justifyContent:"center",alignItems:"center",margin:15}}>
                  <Text style={{fontSize:25}}>FlatList</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Picker',{
            itemId: 86,
            otherParam: 'anything you want here',
          })}>
                <View style={{height:200,width:200,borderColor:"green",borderRadius:20,borderWidth:3,justifyContent:"center",alignItems:"center",margin:15}}>
                  <Text style={{fontSize:25}}>Picker</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Progress')}>
                <View style={{height:200,width:200,borderColor:"green",borderRadius:20,borderWidth:3,justifyContent:"center",alignItems:"center",margin:15}}>
                  <Text style={{fontSize:25, color:"black"}}>ProgressBar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Basic')}>
                <View style={{height:200,width:200,borderColor:"green",borderRadius:20,borderWidth:3,justifyContent:"center",alignItems:"center",margin:15}}>
                  <Text style={{fontSize:25}}>BasicComponent</Text>
                </View>
            </TouchableOpacity>  
            <TouchableOpacity onPress={()=>props.navigation.navigate('Controls')}>
                <View style={{height:200,width:200,borderColor:"green",borderRadius:20,borderWidth:3,justifyContent:"center",alignItems:"center",margin:15}}>
                  <Text style={{fontSize:25}}>Interface Controls</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Othercomponents')}>
                <View style={{height:200,width:200,borderColor:"green",borderRadius:20,borderWidth:3,justifyContent:"center",alignItems:"center",margin:15}}>
                  <Text style={{fontSize:25}}>Other components</Text>
                </View>
            </TouchableOpacity>  
            <TouchableOpacity onPress={()=>props.navigation.navigate('Update')}>
                <View style={{height:200,width:200,borderColor:"green",borderRadius:20,borderWidth:3,justifyContent:"center",alignItems:"center",margin:15}}>
                  <Text style={{fontSize:25}}>Update details</Text>
                </View>
            </TouchableOpacity> 
        </View>
     </ScrollView>
    )
}
export default Components