import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ThemeColors } from "../../../utlis";
import Studio from '../../../assets/images/studio.svg'
import First from '../../../assets/images/firstimage.svg'
import Second from '../../../assets/images/secondimage.svg'
import Thired from '../../../assets/images/thirdimage.svg'
import Fourth from '../../../assets/images/fourthimage.svg'
import styles from "./style";
import { BackgroundLayer } from "@rnmapbox/maps";
const Bedroom = () => {

  const [state, setState] = useState(0)
  const [ActiveState, setActiveState] = useState(false)

  const ImageSelector = (params) => {
    
    setState(params)
    setActiveState(true)

  };

  return (

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        { state === 0 ?
            <Studio style={styles.img} width={164} height={203} /> :
            state === 1 ?
              <First style={styles.img} width={164} height={203} /> :
              state === 2 ?
                <Second style={styles.img} width={200} height={203} /> :
                state === 3 ?
                  <Thired style={styles.img} width={250} height={203} /> :
                  state === 4 ?
                    <Fourth style={styles.img} width={250} height={203} />
                    : null
        }
      </View>

      <View style={styles.buttonContainer}>

        {

          <TouchableOpacity
          
          onPress={()=>ImageSelector(0)}
          // style={styles.touchView1}
          style={{ backgroundColor: state === 0 ?  ThemeColors.secondry : ThemeColors.primary_lite2,
            width:109,height:50,
            borderRadius:10,
            justifyContent:'center'}}
          >
            <Text style={styles.txt}>Studio</Text>
          </TouchableOpacity>

        }
        <TouchableOpacity
        
          onPress={() => ImageSelector(1)}
          // style={styles.touchView2}
          style={{
            backgroundColor: state ===1?  ThemeColors.secondry : ThemeColors.primary_lite2,
            width:50,
            height:50,borderRadius:10,
            justifyContent:'center'
          }}
          >
          <Text style={styles.txt}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ImageSelector(2)}
          // style={styles.touchView2}
          style={{
            backgroundColor: state ===2?  ThemeColors.secondry : ThemeColors.primary_lite2,
            width:50,
            height:50,borderRadius:10,
            justifyContent:'center'
          }}
          >
          <Text style={styles.txt}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ImageSelector(3)}
          // style={styles.touchView2}
          style={{
            backgroundColor: state ===3?  ThemeColors.secondry : ThemeColors.primary_lite2,
            width:50,
            height:50,borderRadius:10,
            justifyContent:'center'
            
          }}
          >
          <Text style={styles.txt}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ImageSelector(4)}
          // style={styles.touchView2}
          style={{
            backgroundColor: state ===4?  ThemeColors.secondry : ThemeColors.primary_lite2,
            width:50,
            height:50,borderRadius:10,
            justifyContent:'center'
          }}
          >
          <Text style={styles.txt}>4</Text>
        </TouchableOpacity>
      </View>



    </View>
  )
}
export default Bedroom