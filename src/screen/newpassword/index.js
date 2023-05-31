import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, ToastAndroid ,ActivityIndicator,Alert} from "react-native";
import LEFTARROW from "../../assets/images/leftarrow_img.svg"
import LOCKIMG from "../../assets/images/lock_img.svg"
import styles from "./style"
import Passwordeye from '../../assets/images/password_eye_img.svg'
import PasswordEyeOff from '../../assets/images/password_eye2_img.svg'
import Password from '../../assets/images/password_img.svg'
import Passwordeye2 from '../../assets/images/password_eye2_img.svg'
import { useNavigation } from '@react-navigation/native';

import { ThemeColors } from "../../utlis";
import { changePassword, resetPassword } from "../../utlis/config";
import Loader from "../../components/Loader";


const Newpassword = ({ route }) => {

    const [isLiked, setIsLiked] = useState(true);
    const [isLiked2, setIsLiked2] = useState(false);
    const [indicator, setIndicator] = useState(false)

    const navigation = useNavigation();
    const [password, setpassword] = useState("")
    const mail = route.params?.mail
    const [confirmpassword, setconfirmpassword] = useState("")
    const [passwordVisibility, setpasswordVisibility] = useState(true)
    const [passwordVisibility2, setpasswordVisibility2] = useState(true)

    const handleLikePress = () => {
        setIsLiked(!isLiked)
        if (PasswordEyeOff) {
            setpasswordVisibility(!passwordVisibility)
        }
        else if (Passwordeye) {
            setpasswordVisibility(passwordVisibility)
        }
    }

    function showMessage(result) {
        console.log( "Result", result)
        if (Platform.OS === 'android') {
            ToastAndroid.show(result, ToastAndroid.SHORT);
        }

        else {
            Alert.alert(result)
        }
    }

    const handleLikePress2 = () => {
        setIsLiked2(!isLiked2)
        if (PasswordEyeOff) {
            setpasswordVisibility2(!passwordVisibility2)
        }
        else if (Passwordeye) {
            setpasswordVisibility2(passwordVisibility2)
        }
    }



    function checkvalidation() {
        if (password.length <= 0) {
        
            showMessage('please enter your password')
            
        }
        else if (password.length < 6) {
          
            showMessage('Password length not be less than 6')
        }
        else if (/(?=.*?[A-Z])/.test(password) === false) {
           
            showMessage('Password contain atleast one uppercase char')
        }
        else if (/(?=.*?[a-z])/.test(password) === false) {
            
            showMessage('Password contain atleast one lowercase char')
        }
        else if (/(?=.*?[0-9])/.test(password) === false) {
            showMessage('Password contain atleast one digit')
        }
        else if (/(?=.*?[#?!@$%^&*-])/.test(password) === false) {
            showMessage('Password should contain atleast one special char ')
        }
        else if (password != confirmpassword) {
            showMessage('Password and confirm password should be same')
        }
        else {
            resetPasswordFun()
        }
    }

    function handleResetPassword(params) {
        var data = JSON.stringify({
            "email": "mick@yopmail.com",
            "password": "123456"
        });

        var config = {
            method: 'post',
            url:resetPassword,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function resetPasswordFun() {
        setIndicator(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": route?.params?.mail,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(resetPassword, requestOptions)
            .then(response => response.json())
            .then(result => {
             setIndicator(false)
                if(result.success == true){
                    showMessage(result.message)
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Login'}],
                      });
                }else{
                    showMessage(result.message)
                }            
            })
            .catch((error)=>{
                setIndicator(false)
                console.log( 'Error', error)
            });
    }

    return (
        <SafeAreaView style={styles.container}>

{
                    indicator && <Loader/>
                }


            <LEFTARROW
                onPress={() => navigation.goBack()}
                width={29.33} height={21.33} style={styles.leftarrow} />
            <View style={styles.locklogoview}>
                <View style={styles.logoview}>
                    <LOCKIMG style={styles.lockimg} width={32} height={42.67} />
                </View>
                <Text style={styles.forgot_pass_text}>New Password</Text>

                <View style={styles.input_view}>
                    <View style={styles.icon_view}>
                        <Password width={13} height={16} />
                    </View>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setpassword(text)}
                        placeholder="New Password (Max 8 char)"
                        placeholderTextColor={ThemeColors.white}
                        style={styles.password_textinput}
                        secureTextEntry={passwordVisibility}

                    />
                    <View style={styles.Passwordeye_img_view}>
                        <TouchableOpacity onPress={() => handleLikePress()}>
                            {isLiked ? <Passwordeye width={17} height={14} /> : <PasswordEyeOff width={17} height={14} />}
                        </TouchableOpacity>


                    </View>
                </View>


                <View style={styles.input_view}>
                    <View style={styles.icon_view}>
                        <Password width={13} height={16} />
                    </View>
                    <TextInput
                        value={confirmpassword}
                        onChangeText={(text) => setconfirmpassword(text)}
                        secureTextEntry={passwordVisibility2}
                        placeholderTextColor={ThemeColors.white}
                        style={styles.password_textinput}
                    />
                    <View style={styles.Passwordeye_img_view}>
                        <TouchableOpacity onPress={() => handleLikePress2()} >
                            {isLiked2 ? <Passwordeye width={17} height={14} /> : <PasswordEyeOff width={17} height={14} />}
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => checkvalidation()}
                    style={styles.submit_btn}
                >
                    <Text style={styles.submit_btn_txt}>Submit</Text>
                </TouchableOpacity>


            </View>

        </SafeAreaView>
    )
}
export default Newpassword