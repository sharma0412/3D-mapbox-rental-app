import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utlis";
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:ThemeColors.primary,
            justifyContent:'center',
            
        },
        logo:{
            alignSelf:'center'
        }
    }
)
export default styles