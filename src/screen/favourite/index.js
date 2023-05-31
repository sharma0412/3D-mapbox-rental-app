import React from "react";
import { SafeAreaView ,Text, View} from "react-native";
import styles from "./style";
import LEFTARROW from "../../assets/images/leftarrow_img.svg"
const Favourite=()=>{
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.topView}>
                <LEFTARROW  width={22} height={16.22}/>
                <Text style={styles.favouriteText}>Favourite</Text>
            </View>


<View style={styles.bottomTab}></View>

        </SafeAreaView>
    )
}
export default Favourite