import { StyleSheet ,Dimensions} from "react-native";
import { FONTS, ThemeColors } from "../../utlis";
const {width} = Dimensions.get("window")

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:ThemeColors.primary
        },
        mail_logo_view:{
            width:'100%',
            justifyContent:'center',
            marginTop:50
        },
        logo_view:{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: ThemeColors.white,
            backgroundColor: ThemeColors.secondry,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        Verification_logo:{
            alignSelf:"center"
            
        }, 
        text_container:{
            color:ThemeColors.white,
            justifyContent:'center',
            marginTop:20
            
        },
        enter_4_digit_code_text:{
            alignSelf:'center',
            color:ThemeColors.white,
            fontSize:12,
            fontWeight:'600'
        },
        user_gmail:{
            alignSelf:'center',
            color:ThemeColors.white,
            fontSize:12,
            fontWeight:'600',
            marginTop:10
        },
        four_digit_otp_view:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            borderColor:ThemeColors.white,
            alignSelf:'center',
            height:50,
            flexDirection:'row',
            marginTop:40
        },
        text_input:{
           height:50,
           width:50,
           backgroundColor:ThemeColors.purple_lite,
           borderColor:ThemeColors.white,
           borderRadius:15,
           marginRight:10,
           fontSize:20,
           color:ThemeColors.secondry,
           fontWeight:'bold',
           paddingLeft:20,
        },
        text_container2:{
         alignSelf:'center',
           marginTop:80,
           fontSize:12,
        },
        resend_code_text:{
            color:ThemeColors.white,
            fontWeight:'400'
        },
        time_pending:{
            color:ThemeColors.secondry,
            fontWeight:'400'
        },
        submit_btn:{
            backgroundColor: ThemeColors.secondry,
            width: width-48,
            height: 50,
            borderRadius: 15,
            justifyContent: 'center',
            marginTop:50,
            justifyContent: 'center',
            alignSelf: 'center'
        },
        submit_text:{
            alignSelf: 'center',
            fontSize: 15,
            fontWeight: '700',
            color: ThemeColors.white,
            fontFamily: FONTS.lato_bold,
            

        },
    }  
)
export default styles