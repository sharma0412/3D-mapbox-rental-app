import React, { useState } from "react";
import { View,Text, Dimensions, TouchableOpacity,StyleSheet } from "react-native";
import RightTick from '../assets/images/right_tick.svg'
import { FONTS, ThemeColors } from "../utlis";
import Bedroom from "../screen/Tabscreens/Bedrooms";
import Furnished from "../screen/Tabscreens/Furnished";
import Budget from "../screen/Tabscreens/Budget";


const {width}=Dimensions.get('window')
const {height}=Dimensions.get('window')
const Filter=()=>{

    const [value,Setvalue]=useState(0)
     
    const selectScreen =(params)=>{
         Setvalue(params)
    }

    return(
        
<View style={{width:'100%',height:600}}>
     <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{fontSize:25,fontWeight:'800',fontFamily:FONTS.lato_bold,color:ThemeColors.white}}>Filters</Text>
<RightTick width={30} height={30}/>
</View> 

<View style={styles.headerContainer}>
  <Text onPress={()=>selectScreen(0)}  style={styles.headerText}>Bedrooms</Text>

  <View style={{color:ThemeColors.white,borderColor:ThemeColors.primary_lite,borderLeftWidth:1}}></View>
   <Text  onPress={()=>selectScreen(1)} style={styles.headerText}>Budget</Text>
   <View style={{color:ThemeColors.white,borderColor:ThemeColors.primary_lite,borderLeftWidth:1}}></View>
   <Text  onPress={()=>selectScreen(2)}   style={styles.headerText}>Furnished</Text>
</View>
<View style={{width:width-20,height:6,backgroundColor:ThemeColors.purple_lite,marginTop:3,
              borderRadius:10,flexDirection:'row',alignSelf:'center',}}>

     {
     value === 0?
    <View style={{width:width-280,backgroundColor:ThemeColors.secondry,height:6,borderRadius:10,left:0}}></View>:
    value === 1?
    <View style={{width:width-270,backgroundColor:ThemeColors.secondry,height:6,borderRadius:10,alignSelf:'center',left:127}}></View>:
    value === 2?
    <View style={{width:width-280,backgroundColor:ThemeColors.secondry,height:6,borderRadius:10,left:260}}></View>:
    null

     }
    
</View>

{ 

value === 0?
<Bedroom/>:
value === 2?
<Furnished/>:
value === 1 ?
<Budget/>:
null

}
    
</View>    

    )
}
export default Filter


const styles =StyleSheet.create(
    {
      headerContainer:{
        flexDirection:'row',
        width:width,
        justifyContent:'space-around',
        alignSelf:'center',
        // borderWidth:1,
        // borderColor:ThemeColors.white,
        padding:15
    
      },
      headerText:{
     color:ThemeColors.white,
     fontSize:15,
     fontFamily:FONTS.lato_regular,
     fontWeight:'700'
      }


    }
)