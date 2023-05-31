import React from "react";
import { SafeAreaView, View ,Text, Dimensions,StyleSheet} from "react-native";
import { FONTS, ThemeColors } from "../../utlis";

const{width}=Dimensions.get('window')
const{height}=Dimensions.get('window')
const styles=StyleSheet.create(
    {
        container:{
            flex:1
          
        },
        container2:{
            backgroundColor:ThemeColors.primary,width:width,height:500,flexDirection:'column',padding:10
        },
        imagecontainer:{
            height:height-380,width:width,
        },
        timeText:{
            color:ThemeColors.primary_lite,fontSize:14,fontWeight:'500',fontFamily:FONTS.poppins,
        },
        titleText:{
            color:ThemeColors.white,fontSize:25,fontWeight:'700',fontFamily:FONTS.lato_regular,top:5
        },
        location:{
            fontSize:18,fontWeight:'400',fontFamily:FONTS.lato_regular,color:ThemeColors.white,top:10
        },
        container3:{
            width:width-20,height:63,backgroundColor:ThemeColors.primary_lite2,top:20,borderRadius:20,flexDirection:'row'
        },
        aboutText:{
            color:ThemeColors.primary_lite,fontSize:12,fontWeight:'500',top:30,height:120,fontFamily:FONTS.Montserrat,
        },
        noteView:{
            width:width-20,height:60,borderWidth:1,borderColor:ThemeColors.primary_lite,alignSelf:'center',borderRadius:15
        },
        noteView2:{
            width:width-20,height:60,alignSelf:'center',borderRadius:15,top:15,backgroundColor:ThemeColors.primary_lite2,justifyContent:"center",alignItems:"center",flexDirection:'row',marginBottom:20
        },
        reporttext:{
            fontWeight:'700',fontFamily:FONTS.lato_regular,fontSize:20,color:ThemeColors.white,left:6,bottom:4
        },
        callsContainer:{
            width:width,height:70,backgroundColor:ThemeColors.primary_lite,flexDirection:'row',padding:10,justifyContent:'space-evenly',alignSelf:'center',position:'absolute',bottom:0

        },
        audiocall:{
        width:110,height:50,backgroundColor:ThemeColors.green,borderRadius:15,justifyContent:'space-evenly',flexDirection:'row',alignSelf:"center"
        },
        whatsapIcon:{
         alignSelf:"center"
        },
        textNowText:{
           alignSelf:"center",fontWeight:'600',color:ThemeColors.white,fontFamily:FONTS.railway_semibold,fontSize:14
        },
        videoCall:{
            width:110,height:50,backgroundColor:ThemeColors.secondry,borderRadius:15,justifyContent:'space-evenly',flexDirection:'row',alignSelf:"center"

        },
        brokerImange:{
            width:38,height:38,borderRadius:50,borderWidth:1,borderColor:ThemeColors.white,left:20,justifyContent:'center',alignSelf:'center'
        },
        borkerName:{
            fontSize:14,fontWeight:'700',fontFamily:FONTS.railway_semibold,color:ThemeColors.white
        },
        nestedView:{
            marginLeft:40,justifyContent:'center'
        },
        brokerWork:{
            fontWeight:"400",fontSize:9,fontFamily:FONTS.railway_semibold,color:ThemeColors.white

        },
       
        
    }
)
export default styles