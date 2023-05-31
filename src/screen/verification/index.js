import React, { useState, useRef } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ToastAndroid, Platform, Alert, } from "react-native";
import LEFTARROW from "../../assets/images/leftarrow_img.svg"
import VerificationImg from "../../assets/images/verification_img.svg"
import styles from "./style";
import { useNavigation } from '@react-navigation/native';
import { emailOtpVerification } from "../../utlis/config";
import Loader from "../../components/Loader";


const Verification = ({ route }) => {

    const mail = route.params?.mail
    const navigation = useNavigation();

    const [indicator, setIndicator] = useState(false)

    const [otp1, setOtp1] = useState("")
    const [otp2, setOtp2] = useState("")
    const [otp3, setOtp3] = useState("")
    const [otp4, setOtp4] = useState("")

    const useRef1 = useRef()
    const useRef2 = useRef()
    const useRef3 = useRef()
    const useRef4 = useRef()



    function showMessage(result) {
        if (Platform.OS === 'android') {
            ToastAndroid.show(result, ToastAndroid.SHORT);
        }
        else {
            Alert.alert(result)
        }
    }

    function handleOtpVerification(otp) {
        setIndicator(true)
        var raw = JSON.stringify({
            "email": mail,
            "otp": otp1 + otp2 + otp3 + otp4
        });

        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: raw,
        };

        fetch(emailOtpVerification, requestOptions)
            .then(response => response.json())
            .then(result => {
                setIndicator(false)
                const json = result.body
                if (result.success == true) {
                    showMessage(result.message)
                    navigation.navigate("ResetPassword", {
                        "mail": route?.params?.mail
                    })
                } else {
                    showMessage(result.message)
                }

            })
            .catch(error => {
                setIndicator(false)
                console.log('error', error)

            });

    }

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
        <SafeAreaView style={styles.container} >
            <Text>helo</Text>

    {

       indicator && <Loader/>
     }

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <LEFTARROW style={styles.leftarrow} width={29.33} height={21.33} />
            </TouchableOpacity>
            <View style={styles.mail_logo_view}>
                <View style={styles.logo_view}>
                    <VerificationImg style={styles.Verification_logo} width={38} height={38} />
                </View>
            </View>
            <Text style={styles.verification_text}>Verification</Text>
            <Text style={styles.enter_verfication_text}>Enter Verification code</Text>
            <View style={styles.four_digit_otp_view}>
                <TextInput
                    ref={useRef1}
                    value={otp1}
                    maxLength={1}
                    keyboardType={"numeric"}
                    style={styles.text_input}
                    onChangeText={(text) => handleOnChange(text, useRef2, "otp1")}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            setOtp1('')
                        }
                        else {
                            return;
                        }
                    }}

                />
                <TextInput
                    maxLength={1}
                    keyboardType={"numeric"}
                    style={styles.text_input}
                    ref={useRef2}
                    value={otp2}

                    onChangeText={(text) => handleOnChange(text, useRef3, "otp2")}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            useRef1.current.focus()
                            setOtp2('')
                        }
                        else {
                            return;
                        }
                    }}
                />
                <TextInput
                    maxLength={1}
                    keyboardType={"numeric"}
                    style={styles.text_input}

                    ref={useRef3}
                    value={otp3}
                    onChangeText={(text) => handleOnChange(text, useRef4, "otp3")}
                    onKeyPress={({ nativeEvent }) => {
                        if (
                            nativeEvent.key === 'Backspace') {
                            useRef2.current.focus()
                            setOtp3('')
                        }

                        else {
                            return;
                        }
                    }}

                />
                <TextInput
                    maxLength={1}
                    keyboardType={"numeric"}
                    style={styles.text_input}
                    ref={useRef4}
                    value={otp4}
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
            <TouchableOpacity
                onPress={() => handleOtpVerification()}
                style={styles.verify_btn}>
                <Text style={styles.verfify_text}>Verify</Text>
            </TouchableOpacity>

             <Text style={styles.text_container}>
                <Text style={styles.if_you_dont_receive_text}>If you didn’t receive a code! </Text>
                <Text
                    style={styles.resend_text}>Resend</Text>
            </Text>
        </SafeAreaView>
    )
}
export default Verification