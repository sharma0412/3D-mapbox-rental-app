import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid, SafeAreaView,ActivityIndicator ,Alert} from "react-native";
import LogoIcon from '../../assets/images/logo.svg'
import { LOCAL, ThemeColors } from "../../utlis";
import Mailimage from '../../assets/images/mail_img'
import Passwordimg from "../../assets/images/password_img"
import Facebookimg from "../../assets/images/facebook_img"
import Googleimg from "../../assets/images/google_img"
import Passwordeye_img from '../../assets/images/password_eye_img'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import { login } from "../../utlis/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PasswordeyeOff_img from '../../assets/images/password_eye2_img.svg'
import Loader from "../../components/Loader";

const Login = () => {

    const [indicator, setIndicator] = useState(false)
    const [isLiked, setIsLiked] = useState(false);
    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")
    const [errortext, setErrortext] = useState("");
    const [passwordVisibility, setpasswordVisibility] = useState(true)
    const [data, SetData] = useState('')
    const navigation = useNavigation();
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


    const handleLikePress = () => {
        setIsLiked(!isLiked)
        if (PasswordeyeOff_img) {
            setpasswordVisibility(!passwordVisibility)
        }
        else if (Passwordeye_img) {
            setpasswordVisibility(!passwordVisibility)
        }

    }


    function checkValidaition() {
        setErrortext("");
        if (!mail) {
            showMessage("Please Enter your email")
            return;
        }
        else if (reg.test(mail) === false) {
            showMessage("Invalid email")
            return;
        }
        else if (!password) {
            showMessage("Please Enter your password")
            return;
        } else {
            handleLogin()
        }
    }

    function showMessage(message) {

        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        }
        else {
            Alert.alert(message)
        }
    }


    function handleLogin() {
        setIndicator(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": mail,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(login, requestOptions)
            .then(response => response.json())
            .then(result => {
                setIndicator(false)
                if (result.success == true) {
                    showMessage(result.message)
                    AsyncStorage.setItem(LOCAL.TOKEN, result.body.token)
                    AsyncStorage.setItem(LOCAL.USER, JSON.stringify(result.body?.user))
                    if (result.body.user.otp_type == "0") {
                        AsyncStorage.setItem(LOCAL.IS_LOGIN, "true")
                        navigation.replace("Home")
                    } else {
                        AsyncStorage.setItem(LOCAL.IS_LOGIN, "false")
                        navigation.navigate('Verification', { mail: mail })
                    }
                } else {
                    showMessage(result.message)
                }

            }
            )
            .catch(error =>{ 
                setIndicator(false)

                console.log('error', error)
            
            });

        var config = {
            method: 'post',
            url: 'http://localhost:98/api/v1/auth/login',
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




    return (<SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.container}>

                {
                    indicator && <Loader/>
                }


                <LogoIcon
                    style={styles.logoicon} width={87.63} height={97.88} />
                <Text style={styles.welcometxt}>Welcome Back</Text>
                <Text style={styles.textcontainer}>
                    <Text style={styles.lets_txt}>Let's </Text>
                    <Text style={styles.login_txt}>Login</Text>
                </Text>
                <Text style={styles.please_login_txt}>please login to continue</Text>
                <View style={styles.gmail_input}>
                    <View style={styles.gmail_icon_view}>
                        <Mailimage width={16} height={10} />
                    </View>
                    <TextInput
                        autoCapitalize='none'
                        value={mail}
                        onChangeText={(text) => setmail(text)}
                        placeholder="Enter your email"
                        placeholderTextColor={ThemeColors.white}
                        style={styles.gamil_textinput}
                    />
                </View>
                <View style={styles.password_input}>
                    <View style={styles.password_icon_view}>
                        <Passwordimg width={12} height={16} />
                    </View>
                    <TextInput
                        autoCapitalize='none'
                        value={password}
                        placeholder="Password"

                        onChangeText={(text) => setpassword(text)}
                        secureTextEntry={passwordVisibility}
                        placeholderTextColor={ThemeColors.white}
                        style={styles.password_textinput} />
                    <View style={styles.Passwordeye_img_view}>
                        <TouchableOpacity onPress={handleLikePress}>
                            {isLiked ? <PasswordeyeOff_img width={17} height={14} /> : <Passwordeye_img width={17} height={14} />}
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} style={{ marginStart: 24, marginTop: 10, marginBottom: 10, width: 150 }}>
                    <Text style={{ color: '#fff' }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => checkValidaition()}
                    style={styles.loginbtn}>
                    <Text style={styles.login_txt}>Login</Text>
                </TouchableOpacity>
                <View style={styles.or_view}>
                    <View style={styles.ortxt_left_view}></View><Text style={styles.or_txt}>or</Text><View style={styles.ortxt_right_view}></View>
                </View>
                <Text style={styles.loginwith_txt}>Login With</Text>
                <View style={styles.login_with_google_facbook_view}>
                    <Googleimg style={styles.googleimg} width={29} height={29} />
                    <Facebookimg style={styles.facbookimg} width={24} height={24} />
                </View>


                <View style={styles.textContainer}>
                    <Text style={styles.dont_have_account_text}>Don't have an account?   </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                    ><Text style={styles.register_text}>Register</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>



    )
}
export default Login
