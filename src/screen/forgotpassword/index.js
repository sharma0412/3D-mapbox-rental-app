import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, ToastAndroid, Platform, Alert } from "react-native";
import LEFTARROW from "../../assets/images/leftarrow_img.svg"
import LOCKIMG from "../../assets/images/lock_img.svg"
import styles from "./style"
import Mailimage from "../../assets/images/mail_img.svg"
import { LOCAL, ThemeColors } from "../../utlis";
import { useNavigation } from '@react-navigation/native';
import { forgotPassword } from "../../utlis/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/Loader";


const Forgotpassword = () => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const navigation = useNavigation();
    const [mail, SetMail] = useState('')
    const [data, SetData] = useState("")
    const [indicator, setIndicator] = useState(false)


    function showMessage(result) {
        console.log( "Result", result)
        if (Platform.OS === 'android') {
            ToastAndroid.show(result, ToastAndroid.SHORT);
        }

        else {
            Alert.alert(result)
        }
    }

    function checkValidaition() {

        if (mail.length <= 0) {
   
            showMessage('Please enter your email')
            return;
        }
        else if (reg.test(mail) === false) {
           
            showMessage('Invalid Email')
            return;
        }
        else {
            handleForgotPassword()
        }
    }



    function handleForgotPassword() {
        setIndicator(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": mail
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(forgotPassword, requestOptions)
            .then(response => response.json())
            .then(result => {
                setIndicator(false)
                if (result.success == true) {
                  showMessage(result.message)
                  navigation.navigate("Verification",{
                    "mail":mail
                  })
                }else{
                    setIndicator(false)
                    showMessage(result)
                }
            })
            .catch(error => console.log('error', error));
    }
    return (

        <SafeAreaView style={styles.container}>

              {
                    indicator && <Loader/>
                }
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <LEFTARROW width={29.33} height={21.33} style={styles.leftarrow} />
            </TouchableOpacity>
            <View style={styles.locklogoview}>
                <View style={styles.logoview}>
                    <LOCKIMG style={styles.lockimg} width={32} height={42.67} />
                </View>
                <Text style={styles.forgot_pass_text}>Forgot Password</Text>
                <Text style={styles.enter_email_add_text}>Enter Email Address</Text>

                <View style={styles.gmail_input}>
                    <View style={styles.gmail_icon_view}>
                        <Mailimage width={16} height={10} />
                    </View>
                    <TextInput
                        autoCapitalize='none'
                        value={mail}
                        onChangeText={(text) => SetMail(text)}
                        placeholder="enter your mail"
                        placeholderTextColor={ThemeColors.white}
                        style={styles.gmail_text_input}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => checkValidaition()}
                    style={styles.send_btn}>
                    <Text style={styles.send_btn_txt}>Send</Text>
                </TouchableOpacity>


            </View>

        </SafeAreaView>
    )
}
export default Forgotpassword