import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { FONTS, ThemeColors } from "../../utlis";
const {width}=Dimensions.get('window')
const {height}=Dimensions.get('window')
const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: height,
        width: width,
    },
    map: {
        flex: 1
    },
    searchBarConatainer: {
    //   backgroundColor:ThemeColors.white,
       width:width-30, 
       height: 50,
         position: 'absolute',
          top: 10,
          borderRadius: 10,
          blurradius:10,
          opacity:0.70,
          flexDirection:'column',
        
    },
    dropDown:{
      marginLeft:10
    },
    locationLogo:{
        
        alignSelf:'center',
        left:21,
        
    },searchBar:{
    width:width-30,
  
    

        
    },notificationView:{
        justifyContent:'center',
    },
    noticationLogo:{
        alignSelf:'center'

    },
    buttonContainer:{
      
        width:width-30, 
        height: 50,
          position: 'absolute',
           borderRadius: 10,
           flexDirection:'row',
           top:70,
           flexDirection:"row",
           justifyContent:"space-between"
          

    },
    contactUsButton:{
        width:150,
        height:50,
        backgroundColor:ThemeColors.green,
        borderRadius:15,
        flexDirection:"row",
        justifyContent:"center",
        
    },
    contactusLogo:{
    alignSelf:'center'
    },
    contactusText:{
        color:ThemeColors.white,
        alignSelf:"center",
        marginLeft:10,
        fontSize:16,
        fontFamily:FONTS.lato_bold
    },
    textInput: {
        marginTop: 40,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor:ThemeColors.Purple_Violet,
        borderWidth:2
      },
    




      
});
export default styles