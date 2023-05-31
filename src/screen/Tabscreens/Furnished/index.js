import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ThemeColors } from "../../../utlis";
import styles from "./style";
import Furnishedd from '../../../assets/images/furnished.svg'
import Unfurnished from '../../../assets/images/unfurnished.svg'

const Furnished = () => {

   const[state,Setstate]=useState(0)
  //  const[isactive,SetIsActive]=useState(false);

    const ImageSelector2 = (params) => {
    Setstate(params)
  //  SetIsActive(!isactive)

  };

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
 
 { state === 0?
            <Unfurnished style={styles.img} width={200} height={203} /> :
      state === 1?
      <Furnishedd style ={styles.img} width ={200} height={203}/>
      :null
           
 }
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
         onPress={()=>ImageSelector2(0)}
          // style={styles.touchView1}
          style={{  backgroundColor: state === 0 ? ThemeColors.secondry:ThemeColors.primary_lite2,
          width:160,height:50,
          borderRadius:10,
          justifyContent:'center'}}
        >
          
            <Text style={styles.txt}>Unfurnished</Text>
          </TouchableOpacity>

       
        <TouchableOpacity
        onPress={()=>ImageSelector2(1)}
          // style={styles.touchView1}
          style={{  backgroundColor: state === 1 ? ThemeColors.secondry: ThemeColors.primary_lite2,
            width:160,height:50,
            borderRadius:10,
            justifyContent:'center'}}
          >
          <Text style={styles.txt}>Furnished</Text>
        </TouchableOpacity>
       
      </View>


    </View>

   
  )
}
export default Furnished