import React, { useEffect, useState } from "react"
import { View, Text, TextInput, StyleSheet, Pressable, onPress, Button, KeyboardAvoidingView } from "react-native"
import { Picker } from "@react-native-picker/picker"
import RNSmtpMailer from "react-native-smtp-mailer";

function Loginpage(props) {
    const [number, setnumber] = useState(" ")
    const [otp, setotp] = useState()
    const [compulsory, setcompulsary] = useState(false)
    const [show, setshow] = useState(false)
    const [selectedValue, setSelectedValue] = useState("India");
    var [ran, setran] = useState()
    function getotp() {
        if (!number ) { setcompulsary(true) }
        else {
            setcompulsary(false)
            var x = Math.floor((Math.random() * 10000) + 1)
            setran(10)
            console.log(ran)
            setshow(!show)
        }

    }
    function validate() {

        if (ran == otp) {
            props.navigation.navigate("Chat")
        }
        else {
            alert("Enter correct OTP")
        }
    }
    function j() {
        RNSmtpMailer.sendMail({
            mailhost: "smtp.gmail.com",
            port: "465",
            ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
            username: "whatsappclone123456789@gmail.com",
            password: "whatsappclone1234",
            fromName: "Some Name", // optional
            // replyTo: "nikkibijjala@gmail.com", 
            recipients: "nikkibijjala@gmail.com",// optional
            subject: "subject",
            htmlBody: "<h1>header</h1><p>body</p>",
            // attachmentNames: [
            //   "image.jpg",
            //   "firstFile.txt",
            //   "secondFile.csv",
            //   "pdfFile.pdf",
            //   "zipExample.zip",
            //   "pngImage.png"
            // ], // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
        })
            .then(success => console.log(success))
            .catch(err => console.log(err));
    }
    useEffect(()=>{
        if (number=="") { 
            console.log(number)
            setcompulsary(true) }
        else {
            console.log(number)
            setcompulsary(false)
             } 
    },[number])
    
    return (
        <KeyboardAvoidingView
            behavior="position"
            style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <Text style={{ fontSize: 23, letterSpacing: 0.1, color: "#128C7E", fontWeight: "bold" }}>Verify your phone number </Text>
            </View>
            <View style={{ alignItems: "center", margin: 20 }}>
                <Text style={{ fontSize: 16, color: "black", fontWeight: "500" }}>WhatsApp will send an SMS message (carrier changes may apply)to verify your phone number.</Text>
                <Text style={{ fontSize: 16, color: "black", fontWeight: "500" }}>Enter your country code and phone number:</Text>
            </View>
            <View style={styles.dropdown}>
                <View style={{ width: "70%", height: 40, justifyContent: "center", alignItems: "flex-end", backgroundColor: "white" }}>
                    <Picker
                        mode="dropdown"
                        prompt="nikhitha"
                        onFocus={() => { console.log("onfocus") }}
                        selectedValue={selectedValue}
                        style={{ height: 50, width: "100%", borderBottomWidth: 1, borderBottomColor: "green", justifyContent: "center" }}
                        itemStyle={{ color: 'red', backgroundColor: 'blue', fontSize: 50 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="India" value="java" />
                        <Picker.Item label="United States" value="js" />
                        <Picker.Item label="United Kingdom" value="js" />
                    </Picker>
                </View>
            </View>
            <View style={styles.input}>
                <TextInput value={number}
                    keyboardType="numeric"
                    placeholder="phone number"
                    maxLength={10}
                    onChangeText={(e) => {
                        setnumber(e)
                        
                    }} />
                {compulsory && <Text style={{ color: "red" }}>Number is required</Text>}
            </View>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40, padding: 10 }}>
                <Pressable style={styles.otp} onPress={getotp}>
                    <Text style={{ fontSize: 20, color: "white" }}>Get OTP</Text>
                </Pressable>
            </View>
            <View>
                {show && <View>
                    <View style={styles.input}>
                        <TextInput style={styles.input} value={otp}
                            keyboardType="numeric"
                            placeholder="Enter OTP"
                            onChangeText={(e) => { setotp(e) }} />

                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                        <Pressable style={[styles.otp, { marginTop: 20 }]} onPress={validate}>
                            <Text style={{ fontSize: 25, color: "white" }}>Login</Text>
                        </Pressable>
                    </View>
                </View>
                }
            </View>

        </KeyboardAvoidingView>)
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        marginLeft: 30,
        marginRight: 30,
        // justifyContent: "center",
        // alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "green",
    },
    otp: {
        height: 50,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: 20,

    },
    dropdown: {
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "green",
        margin: 30
    }
})
export default Loginpage