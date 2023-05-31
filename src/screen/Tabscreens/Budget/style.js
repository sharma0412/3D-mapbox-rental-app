import { BackgroundLayer } from "@rnmapbox/maps";
import React from "react";
import { Dimensions, StyleSheet } from 'react-native';
import { FONTS, ThemeColors } from "../../../utlis";
const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

const styles = StyleSheet.create(
    {

        container: {
            flex: 1,
            flexDirection:'column'
        },

        graphContainer: {
            width: width,
            height: height - 550,
            marginTop:20,
            alignSelf: 'center',
            justifyContent: 'space-around',
            // borderWidth:4,borderColor:ThemeColors.white,


            // flexDirection:'column'

            // marginTop:5,
            // marginBottom:5,

        },
        swiperBtnView: {
            width: width-10,
            
            alignSelf:"center",
            marginTop:10,
            borderRadius:5,
            flexDirection:'row',
            justifyContent:"space-around"

        },
        sliderBack:{
            height:40,
            backgroundColor:ThemeColors.primary_lite,
            borderRadius:10,
            width:width-50
        },
        sliderFront:{
            height:40,
            backgroundColor:ThemeColors.secondry,
            borderRadius:10,
            width:width-50,
            position:'absolute'
        },
        thumb:{
          
            position:'absolute',
            width:30,
            height:30,
            left:10,
            backgroundColor:ThemeColors.white,
            borderColor:ThemeColors.white,
            borderWidth:1,
            borderRadius:10
        }




    }
)
export default styles