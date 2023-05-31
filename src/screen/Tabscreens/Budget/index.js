import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View ,Text, Dimensions} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { step0 } from "react-native/Libraries/Animated/Easing";
import { ThemeColors } from "../../../utlis";

import styles from "./style";
const {width}=Dimensions.get('window')

const Budget=()=>{

    const[state,Setstate]=useState(0)
    const[range,Setrange]=useState('10%')

    return(

       <View style={styles.container}>
        <View style={styles.graphContainer}>



            <View style={{height:7.21,width:10.28,backgroundColor: range >='5%'  ?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:37}}></View>
            <View style={{height:7.21,width:10.28,backgroundColor: range >= '10%' ?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:52}}></View>
            <View style={{height:7.21,width:10.28,backgroundColor: range >= '15%' ?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:67}}></View>
            <View style={{height:11.72,width:10.28,backgroundColor: range >= '20%' ?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:82}}></View>
            <View style={{height:15.33,width:10.28,backgroundColor: range >= '25%' ? ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft: 97}}></View>
            <View style={{height:27.96,width:10.28,backgroundColor: range >= '30%' ?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft: 112}}></View>
            <View style={{height:166.83,width:10.28,backgroundColor: range >= '35%' ?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft: 127}}></View>
            <View style={{height:250,width:10.28,backgroundColor: range >= '40%' ?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:142}}></View>
            <View style={{height:230.06,width:10.28,backgroundColor: range >= '45%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:157}}></View>
            <View style={{height:200.38,width:10.28,backgroundColor:range >= '50%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:172}}></View>
            <View style={{height:143.38,width:10.28,backgroundColor:range >= '55%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:187}}></View>
            <View style={{height:147.89,width:10.28,backgroundColor:range >= '60%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:202}}></View>
            <View style={{height:80.26,width:10.28,backgroundColor:range >= '65%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:217}}></View>
            <View style={{height:75.75,width:10.28,backgroundColor:range >= '70%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:232}}></View>
            <View style={{height:64.03,width:10.28,backgroundColor:range >= '75%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:247}}></View>
            <View style={{height:27.96,width:10.28,backgroundColor:range >= '80%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:262}}></View>
            <View style={{height:22.54,width:10.28,backgroundColor:range >= '85%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:277}}></View>
            <View style={{height:14.43,width:10.28,backgroundColor:range >= '90%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:292}}></View>
            <View style={{height:32.46,width:10.28,backgroundColor:range >= '95%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:307}}></View>
            <View style={{height:14.43,width:10.28,backgroundColor:range >= '97%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:322}}></View>
            <View style={{height:11.72,width:10.28,backgroundColor:range >= '100%'?ThemeColors.secondry:ThemeColors.primary_lite,position:'absolute',bottom:0,borderRadius:10,marginLeft:337}}></View>
           

        </View>
       
       {/* <View style={styles.swiperBtnView}>
         <Text onPress={priceIncrease} style={{color:ThemeColors.white,fontSize:20,padding:20,borderWidth:1,borderColor:ThemeColors.secondry}}>+</Text><Text style={{color:ThemeColors.white,fontSize:20,fontWeight:'800'}}>{state}</Text>
         <Text onPress={priceDecerease} style={{color:ThemeColors.white,fontSize:20,borderWidth:1,padding:20,borderColor:ThemeColors.secondry}}>-</Text>
       </View> */}

       
       {/* <Slider style={{width:150,height:40,alignSelf:"center",backgroundColor:ThemeColors.secondry}}
     minimumValue={0}
     maximumValue={1}
     maximumTrackTintColor={ThemeColors.green}
     minimumTrackTintColor={ThemeColors.white}
     thumbTintColor={ThemeColors.Purple_Violet}
     value={0.5}
     inverted
     onValueChange={value=>Setrange(parseInt(value*100)+'%')}

     /> */}
<GestureHandlerRootView>
<View style={{width:width-20,height:30,justifyContent:'center',alignSelf:'center',marginTop:20}}>
<View style={styles.sliderBack}></View>
<View style={styles.sliderFront}></View>
<View style={styles.thumb}></View>
</View>
</GestureHandlerRootView>
   


   

        </View>
    )
}
export default Budget
