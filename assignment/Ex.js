import  React   from "react";
import { View, Text, Button, Pressable, onPress, ActivityIndicator, FlatList, Image, ScrollView, TextInput } from "react-native"
function Ex(props){
    return(
        <View>
             <View>
                 {props.filteredDataSource.map((l) => {
                    const user = l.name.title + '. ' + l.name.first + ' ' + l.name.last
                    const img = l.pictute.medium
                    return <Pressable onPress={()=>props.navigation.navigate("Room")}>
                        <View style={{ flexDirection: 'row', alignItems: "center", backgroundColor: "white", margin: 0 }}>
                            <View style={{ height: 70, width: 70, borderRadius: 40 }}>
                                <Image style={{ width: 70, height: 70, borderColor: "black", borderRadius: 40 }}
                                    source={{ uri: img }} />
                            </View>
                            <Text style={{ fontSize: 20, margin: 30 }}>{user}</Text>
                        </View>
                    </Pressable>

                })}
            </View>
        </View>
    )
}
export default Ex
