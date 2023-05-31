import React, { Profiler } from "react";
import { SafeAreaView, View ,Image,Text, ImageBackground, Dimensions} from "react-native";
import LEFTARROW from "../../assets/images/leftarrow_img.svg"
import Transparent_Back_img from "../../assets/images/transparent_back_img.svg"
import Myrentals from "../../assets/images/my_rentals.svg"
import Rightarrow from "../../assets/images/right_arrow_img.svg"
import { ThemeColors } from "../../utlis";
import styles from "./style";
import Profile2 from '../../assets/images/profile-2.svg'
const {width} =Dimensions.get('window')
const {height} =Dimensions.get('window')
const Profile=()=>{
    return(
        <SafeAreaView style={styles.container}>
         <View style={{width:width,height:height-400,backgroundColor:ThemeColors.purple_lite}}>
         </View>
         <View style={styles.container}></View>
       
        </SafeAreaView>
    )
}
export default Profile