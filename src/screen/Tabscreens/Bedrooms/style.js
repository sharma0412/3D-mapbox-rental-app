import React from "react";
import { Dimensions, StyleSheet} from 'react-native';
import { color } from "react-native-reanimated";

import { FONTS, ThemeColors } from "../../../utlis";
const {width}=Dimensions.get('window')
const {height}=Dimensions.get('window')


const styles=StyleSheet.create(
   {

    container:{
    flex:1
    },
    buttonContainer:{
        flexDirection:'row',
        width:width,
        justifyContent:"space-evenly",
        alignSelf:'center', 
    },
    touchView1:{
        backgroundColor:ThemeColors.primary_lite2,
        width:109,height:50,
        borderRadius:10,
        justifyContent:'center'
    },
    touchView2:{
        backgroundColor:ThemeColors.primary_lite2,
        width:50,
        height:50,borderRadius:10,
        justifyContent:'center'},
    txt:{
        fontSize:20,
        fontWeight:'700',
        fontFamily:FONTS.lato_regular,
        color:ThemeColors.white,
        textAlign:'center'
    },
    imageContainer:{
        width:'100%',
        height:'60%',
        // borderWidth:1,
        // borderColor:'white',
        justifyContent:'center',
        marginTop:5,
        marginBottom:5
    },
    img:{
        width:164.5,
        height:203.75,
        alignSelf:'center'
    }


    }
)
export default styles