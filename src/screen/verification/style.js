import { StyleSheet,Dimensions } from "react-native";
import { FONTS, ThemeColors } from "../../utlis";
const { width } = Dimensions.get("window")
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:ThemeColors.primary
        },
        leftarrow:{
            marginTop:20,
            marginLeft:20

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
        verification_text:{
            color:ThemeColors.white,
            fontSize:25,
            fontWeight:'500',
            textAlign:'center',
            marginTop:20
        },
        
        enter_verfication_text:{
            color:ThemeColors.white,
            fontSize:12,
            fontWeight:'400',
            alignSelf:'center',
            marginTop:20
        },four_digit_otp_view:{
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
        verify_btn:{

            backgroundColor: ThemeColors.secondry,
            width: width-48,
            height: 50,
            borderRadius: 15,
            justifyContent: 'center',
            marginTop: 120,
            justifyContent: 'center',
            alignSelf: 'center'

        },
        verfify_text:{
            alignSelf: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            color: ThemeColors.white,
            fontFamily: FONTS.lato_bold
        },
        text_container:{
             flexDirection:'row',
            textAlign:'center',
             marginTop:30
        },
        
        if_you_dont_receive_text:{
            color:ThemeColors.white,
            fontSize:12
        },
        resend_text:{
            color:ThemeColors.secondry,
            fontSize:12
        }
       
    }
)
export default styles