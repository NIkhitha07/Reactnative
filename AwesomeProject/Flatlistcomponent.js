import React from "react";
import {
    StyleSheet,
    Text,
    Button,
    View,
    FlatList,
    TextInput
  
  } from 'react-native';
  import { useState } from "react";
import { Switch } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome"

 function Flatlistcomponent(){
     const [list,setlist]=useState()
     const [listdata,setlistdata]=useState([])
     const [imp,setimp]=useState(false)
     const friends=[{data:'nik'},{data:'nik'}]
     function addtolist(){
        setlistdata([...listdata,{data:list,id:Math.floor(Math.random() * 100) + 1,impo:imp}])
    }
    function deletecard(x){
        var y=listdata
        console.log(y)
        y=listdata.filter((t)=>{
            if(t.id!=x){
                return t
            }
        })
        setlistdata(y)
     }
    return(<View>
        <View style={styles.topdiv}>
            <View>
                <TextInput style={styles.input}  
                placeholder="enter value"
                value={list}
                onChangeText={(s)=>setlist(s)}
                />
            </View>
            
            <View style={styles.addbutton}>
                <Button title="Add to list"
                color={'#ffa500'}
                onPress={addtolist}
                />
            </View>

        </View>
        <View >
                <Text>Want to be important?</Text>
                <Switch value={imp} onChange={()=>setimp(!imp)}/>
            </View>

        <FlatList data={listdata} renderItem={({item})=> (
             <View style={styles.list}>
                 {item.impo && <View style={styles.imp}><Icon name="star" color="red" size={22} /></View>}
                 <Text style={styles.delete} onPress={()=>deletecard(item.id)}></Text>
                 <Text style={{color:'#800000',fontSize:30}}>{item.data}</Text>
             </View>
        )  
        }/>
    </View>
    );
  }
  const styles=StyleSheet.create({
      input:{
          height:40,
          borderWidth: 1,
        //   margin:40,
          width:250,
          borderRadius:20
      },
      topdiv:{
          position:"relative",
          margin:10,
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
      },
      addbutton:{
          width:100,
          borderRadius:20,
      },
      list:{
          minHeight:100,
          margin:5,
          borderRadius:20,
          backgroundColor:`#40e0d0`,
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      },
      delete:{
        position:"absolute",
        top:10,
        right:20,
        width:20,
        height:20,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#ffe4e1'
      },
      imp:{
          position:"absolute",
          top:10,
          left:20
      }
  })
  export default Flatlistcomponent;