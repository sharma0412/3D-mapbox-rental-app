import React, { useEffect } from "react";
import { SafeAreaView} from "react-native";
import styles from "./style";
import LOGOIMG from "../../assets/images/logo.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL } from "../../utlis";


    
const Splash = ({ navigation }) => {

    async function handleNav(params) {
        let isLogin = await AsyncStorage.getItem(LOCAL.IS_LOGIN)
        setTimeout(()=>{
            // if(isLogin == "true"){
            //     navigation.replace("Home")
            // }else{
            //     navigation.replace("Login")
            // }
            navigation.replace('Home')
            
        },2000)
    }
    useEffect( ()=>{
        handleNav()
    })

    return(
        <SafeAreaView style={styles.container}>
         <LOGOIMG style={styles.logo}width={150.12} height={134.29}/>
        </SafeAreaView>

    )
}
export default Splash