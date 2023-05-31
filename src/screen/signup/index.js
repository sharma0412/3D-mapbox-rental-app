import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ToastAndroid, Platform, Alert, ActivityIndicator } from "react-native";
import Logo from '../../assets/images/logo.svg'
import styles from "./style";
import { RadioButton, CheckBox } from 'react-native-paper';
import { LOCAL, ThemeColors } from "../../utlis";
import Name from "../../assets/images/name_img.svg"
import Mail from "../../assets/images/mail_img.svg"
import Phone from '../../assets/images/phone_img.svg'
import Passwordeye_img from '../../assets/images/password_eye_img'
import PasswordEyeOff from '../../assets/images/password_eye2_img.svg'
import Password from '../../assets/images/password_img.svg'
import { useNavigation } from '@react-navigation/native';
import { signup } from "../../utlis/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/Loader";
import Checkbox from '@react-native-community/checkbox'
const Signup = () => {
    const [indicator, setIndicator] = useState(false)
    const navigation = useNavigation();
    const [isLiked, setIsLiked] = useState(false);
    const [checked, setChecked] = useState('first');
    const [checkbox, setCheckbox] = useState(false);
    const [password, setpassword] = useState("")
    const [passwordVisibility, setpasswordVisibility] = useState(true)
    const [userName, setuserName] = useState('')
    const [mail, setmail] = useState('')
    const [phone, setphone] = useState('')
    const [value, setValue] = useState('')
    const [data, SetData] = useState("")

    const [isSelected, setSelection] = useState(false);

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let regex = /^[a-zA-Z0-9._" "]*$/;
    let regex2 = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;


    const handleLikePress = () => {
        setIsLiked(!isLiked)
        if (PasswordEyeOff) {
            setpasswordVisibility(!passwordVisibility)
        }
        else if (Passwordeye_img) {
            setpasswordVisibility(passwordVisibility)
        }
    }


    function showMessage(result) {

        if (Platform.OS === 'android') {
            ToastAndroid.show(result, ToastAndroid.SHORT);
        }

        else {
            Alert.alert(result)
        }
    }


    function check_signup_Validaition() {

        if (userName.length <= 0 && userName.replaceAll(' ', '').length > 0) {
           
            showMessage('Please enter name')
            return;
        }
        else if (userName.length < 3 || userName.length > 30) {
            if (Platform.OS === 'android') {
                
                showMessage('Chracter should not be less than 3')
            } else {
                Alert.alert("Character should not be less than 3")
            }
            return;
        }
        else if (!regex.test(userName)) {
        
            showMessage('Enter valid usename')
        }
        else if (mail.length <= 0) {
          
            showMessage('Please enter mail')
        }
        else if (reg.test(mail) === false) {
           
            showMessage('Please enter valid mail')
        }
        else if (regex2.test(mail) === true) {
           
            showMessage('Emoji are not allow')
        }

        else if (phone.length == "") {
    
            showMessage('Please enter number')
        }
        else if (phone.length < 9 || phone.length > 16) {
           
            showMessage('Enter valid number')
        }
        else if (password.length <= 0) {
           
            showMessage('Please enter your password')
        }
        else if (password.length < 6) {
           
            showMessage('Password length not be less than 6')
        }
       
        else if (/(?=.*?[A-Z])/.test(password) === false) {
          
            showMessage('Password should contain at list 1 uppercase char')
        }
        else if (/(?=.*?[a-z])/.test(password) === false) {
            
            showMessage('Password should contain at list 1 lowercase char"')
        }
        else if (/(?=.*?[0-9])/.test(password) === false) {
            
            showMessage('Password contain at list 1 digit')
            
        }
        else if (/(?=.*?[#?!@$%^&*-])/.test(password) === false) {
            
            showMessage('Password should contain at list 1 special char ')
        }
        else if(isSelected === false){
            showMessage('please Accept All terms & Conditions and Privacy policies')
        }
        else {
            handleRegistration()
        }
    }

    function handleRegistration() {
        setIndicator(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "role": value,
            "name": userName,
            "email": mail,
            "phone": phone,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(signup, requestOptions)
            .then(response => response.json())
            .then(result => {

                setIndicator(false)
                if (result.success == true) {
                    AsyncStorage.setItem(LOCAL.IS_LOGIN, "false")
                    AsyncStorage.setItem(LOCAL.TOKEN, result.body.token)
                    showMessage(result.message)
                    navigation.navigate('Verification', {
                        "mail": mail
                    })
                } else {
                    showMessage(result.message)
                }

            }
            )
            .catch(error => {
                setIndicator(false),
                    console.log('error', error)
            });   }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    indicator && <Loader />
                }
                <Logo style={styles.logoicon} width={97.88} height={87.63} />
                <Text style={styles.textContainer}>
                    <Text style={styles.create_new_acc_text}>Create Your new </Text>
                    <Text style={styles.account_text}>Account</Text>
                </Text>
                <RadioButton.Group
                    onValueChange={newValue => setValue(newValue)}
                    value={value}>
                    <View style={styles.radio_btn_view}>
                        <View style={styles.radio_btn_view}>
                            <RadioButton.Android
                                uncheckedColor={ThemeColors.white}
                                color={ThemeColors.secondry}
                                value="0"
                            />
                            <Text style={styles.agent_text}>
                                Customer
                            </Text>
                        </View>
                        <View style={styles.radio_btn_view}>
                            <RadioButton.Android
                                uncheckedColor={ThemeColors.white}
                                color={ThemeColors.secondry}
                                value="1"
                            />
                            <Text style={styles.agent_text}>
                                Agent
                            </Text>
                        </View>
                    </View>
                </RadioButton.Group>
                <View style={styles.input_view}>
                    <View style={styles.icon_view}>
                        <Name width={13} height={16} />
                    </View>
                    <TextInput
                        autoCapitalize='none'
                        value={userName}
                        onChangeText={(text) => setuserName(text)}
                        placeholder="Full Name"
                        placeholderTextColor={ThemeColors.white}
                        style={styles.textinput}
                    />
                </View>
                <View style={styles.input_view}>
                    <View style={styles.icon_view}>
                        <Mail width={13} height={16} />
                    </View>
                    <TextInput
                        autoCapitalize='none'
                        onChangeText={(text) => setmail(text)}
                        placeholder="Email Address"
                        placeholderTextColor={ThemeColors.white}
                        style={styles.textinput}
                    />
                </View>
                <View style={styles.input_view}>
                    <View style={styles.icon_view}>
                    <Phone width={13} height={16} />
                    </View>
                    <TextInput
                        autoCapitalize='none'
                        value={phone}
                        onChangeText={(text) => setphone(text)}
                        keyboardType="number-pad"
                        placeholder="Phone number"
                        placeholderTextColor={ThemeColors.white}
                        style={styles.textinput}

                    />
                </View>
                <View style={styles.input_view}>
                    <View style={styles.icon_view}>
                        <Password width={13} height={16} />
                    </View>
                    <TextInput
                        autoCapitalize='none'
                        value={password}
                        onChangeText={(text) => setpassword(text)}
                        secureTextEntry={passwordVisibility}
                        placeholderTextColor={ThemeColors.white}
                        style={styles.password_textinput}
                    />
                    <View style={styles.Passwordeye_img_view}>
                        <TouchableOpacity onPress={() => handleLikePress()}>
                            {isLiked ? <PasswordEyeOff width={17} height={14} /> : <Passwordeye_img width={17} height={14} />}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.checkbox_text_container}>

                    <Checkbox
                        tintColors={{ true: ThemeColors.secondry, false: ThemeColors.white}}
                        onCheckColor={ThemeColors.secondry}
                        onTintColor={ThemeColors.secondry}
                        value={isSelected}
                        onValueChange={setSelection}
                        
                    />

                    <Text style={styles.accept_text}>I Accept All Terms & Conditions and Privacy Policies
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => check_signup_Validaition()}
                    style={styles.Register_btn}>
                    <Text style={styles.Register_text}>Register</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textcontainer2}>
                        <Text style={styles.dont_have_account_text}>Already have an account? </Text>
                        <Text style={styles.register_text}>Login</Text>
                    </Text>
                </TouchableOpacity> */}

                <View style={styles.textContainer2}>
                    <Text style={styles.alreadyHaveText}>Already have an account? </Text>
                    <Text
                        onPress={() => navigation.goBack()}
                        style={styles.loginText}>Login</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}


export default Signup