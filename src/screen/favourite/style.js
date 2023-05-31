import { StyleSheet ,Dimensions} from "react-native";
import { ThemeColors } from "../../utlis";
const {width} = Dimensions.get("window")
const {height} = Dimensions.get("window")

const styles=StyleSheet.create(
    {

        container:{
            flex:1,
            backgroundColor:ThemeColors.primary
        },
        topView:{
            width:width,
            height:80,
            borderBottomWidth:1,
            borderBottomColor:ThemeColors.Purple_Violet,
            flexDirection:'row',
           
        },
        favouriteText:{
            color:ThemeColors.white,
            fontSize:18,
            
        },
        bottomTab:{
            flexDirection:'row',
            position:'absolute',bottom:0,
            width:'100%',
            borderWidth:1,
            borderColor:'white',
            height:100
        }
    }
)
export default styles