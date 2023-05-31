import React, { useState, createRef, useEffect } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, ToastAndroid ,Alert} from "react-native";
import VerificationImg from "../../assets/images/verification_img.svg"
import styles from "./style";

import { useNavigation } from '@react-navigation/native';
import { emailOtpVerification, resendOtp } from "../../utlis/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL } from "../../utlis";
import Loader from "../../components/Loader";



const Entercode = ({ route }) => {

    useEffect(() => {
        setTimeout(() => {
            SetResend("Resend code")
            SetResendText("")
        }, 22000);
    })

    const navigation = useNavigation();
    const [data, SetData] = useState('')

    const mailid = route.params?.mail
    let gmail = mailid

    console.log(mailid)

    const [resend, SetResend] = useState('22 seconds')
    const [resendText, SetResendText] = useState('Resend code in ')

    const [indicator, setIndicator] = useState(false)
    const [otp1, setOtp1] = useState("")
    const [otp2, setOtp2] = useState("")
    const [otp3, setOtp3] = useState("")
    const [otp4, setOtp4] = useState("")

    const useRef = createRef()
    const useRef2 = createRef()
    const useRef3 = createRef()
    const useRef4 = createRef()


    function handleResendOtp() {
        setIndicator(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "email": gmail
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(resendOtp, requestOptions)
            .then(response => response.text())
            .then(result => 
                setIndicator(false),
                console.log(result)
           
            )
            .catch(error => console.log('error', error));
    }

    function showMessage(result) {
        if (Platform.OS === 'android') {
            ToastAndroid.show(result, ToastAndroid.SHORT);
        }
        else {
            setIndicator(false)
            Alert.alert(result)
        }
    }


    function handleOtpVerification(otp) {
        setIndicator(false)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": gmail,
            "otp": otp1 + otp2 + otp3 + otp4
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(emailOtpVerification, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setIndicator(false)
                if(result.success == true){
                    showMessage(result.message)
                    AsyncStorage.setItem(LOCAL.IS_LOGIN,"true")
                    AsyncStorage.setItem(LOCAL.USER,JSON.stringify(result.body))
                    navigation.navigate("Home")
                }else{
                    showMessage(result.message)
                }
            })
            .catch((error)=>{
                setIndicator(false)
                  console.log( "Error", error)
            });

    }
    const ref = useRef()
    const ref1 = useRef()
    const ref2 = useRef()

    function handleOnChange(val, ref, name) {
        if (val != "") {
            if (name == "otp1") {
                setOtp1(val)
                useRef2.current.focus()
            } else if (name == "otp2") {
                setOtp2(val)
                useRef3.current.focus()
            } else if (name == "otp3") {
                setOtp3(val)
                useRef4.current.focus()
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mail_logo_view}>
            {
                    indicator && <Loader/>
                }

                <View style={styles.logo_view}>
                    <VerificationImg style={styles.Verification_logo} width={38} height={38} />
                </View>
            </View>

            <View style={styles.text_container}>
                <Text style={styles.enter_4_digit_code_text}>Enter the 4 digit code that we just sent to </Text>
                <Text style={styles.user_gmail}>{mailid}</Text>

            </View>

            <View style={styles.four_digit_otp_view}>
                <TextInput
                    ref={useRef}
                    value={otp1}
                    style={styles.text_input}
                    maxLength={1}
                    onSubmitEditing={() => ref.current.focus()}
                    returnKeyType={'next'}
                    returnKeyLabel='next'
                    keyboardType={"numeric"}
                    onChangeText={(text) => handleOnChange(text, useRef2, "otp1")}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            setOtp1('')
                        }
                        else {
                            return;
                        }
                    }} />
                <TextInput
                    ref={useRef2}
                    value={otp2}
                    maxLength={1}
                    keyboardType={"numeric"}
                    style={styles.text_input}
                    onChangeText={(text) => handleOnChange(text, useRef3, "otp2")}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            useRef.current.focus()
                            setOtp2('')
                        }
                        else {
                            return;
                        }
                    }}
                />
                <TextInput
                    ref={useRef3}
                    value={otp3}
                    maxLength={1}
                    keyboardType={"numeric"}
                    onSubmitEditing={() => ref1.current.focus()}
                    returnKeyType={'next'}
                    returnKeyLabel='next'
                    style={styles.text_input}
                />
                <TextInput
                    ref={useRef4}
                    value={otp4}
                    maxLength={1}
                    keyboardType={"numeric"}
                    style={styles.text_input}
                    onChangeText={(text => setOtp4(text))}
                    onKeyPress={({ nativeEvent }) => {
                        if (
                            nativeEvent.key === 'Backspace') {
                            setOtp4('')
                            useRef3.current.focus()
                        }

                        else {
                            return;
                        }
                        //do action : //other action
                    }}

                />
            </View>

            <Text style={styles.text_container2}>
                <Text
                    style={styles.resend_code_text}>{resendText}</Text>

                <Text
                    onPress={() => handleResendOtp()}
                    style={styles.time_pending}>{resend}</Text>
            </Text>

            <TouchableOpacity
                onPress={() => handleOtpVerification(otp1 + otp2 + otp3 + otp4)}
                style={styles.submit_btn}>
                <Text style={styles.submit_text}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}
export default Entercode