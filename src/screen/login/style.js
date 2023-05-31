import { StyleSheet,Dimensions } from "react-native";
import { ThemeColors } from "../../utlis";
import { FONTS } from "../../utlis";
const {width} = Dimensions.get("window")

const styles=StyleSheet.create(
    {

     container:{

        flex:1,
        backgroundColor:ThemeColors.primary,
        alignContent:'center',
        justifyContent:'center'

     },
     logoicon:{
      marginTop:30,
      alignSelf:'center'
     },
     welcometxt:{
        fontFamily:FONTS.laila_regular,
        color:ThemeColors.white,
        fontSize:25,alignSelf:'center'
        
     },textcontainer:{
        width:'100%',
     height:40,
     textAlign:'center',
     marginTop:10,
     fontSize:25,
     },
     lets_txt:{
      color:ThemeColors.white,
      alignSelf:'center'

     },
     login_txt:{
      color:ThemeColors.white,
      alignSelf:'center'
     },
     please_login_txt:{
      marginTop:10,
      color:ThemeColors.white,
      fontFamily:FONTS.lato_regular,
      fontSize:12,
      alignSelf:"center"
     },
     extra_input:{
      marginTop:20,
      height:50,
      borderColor:ThemeColors.white,
      borderRadius:15,
      width:width-48,
      alignSelf:'center'
     },
     gmail_input:{
      marginTop:20,
      height:50,
      width:width-48,
      borderWidth:1,
      borderColor:ThemeColors.white,
      borderRadius:15,
      flexDirection:'row',
      alignSelf:'center'
     },
     gamil_textinput:{
      width:"85%",
      height:'100%',
      color:ThemeColors.white,
      paddingLeft:20
      
     },
     gmail_icon_view:{
      height:'100%',
      width:'15%',
      backgroundColor:ThemeColors.secondry,
      borderTopLeftRadius:14,
      borderBottomLeftRadius:14,
      justifyContent:"center",
      alignItems:'center',
      alignSelf:'center'

     },
     password_input:{
      marginTop:20,
      height:50,
      width:width-48,
      borderWidth:1,
      borderColor:ThemeColors.white,
      borderRadius:15,
      flexDirection:'row',
      alignSelf:'center'

     },
    password_icon_view:{
      height:'100%',
      width:'15%',
      backgroundColor:ThemeColors.secondry,
      borderTopLeftRadius:14,
      borderBottomLeftRadius:14,
      justifyContent:"center",
      alignItems:'center',
      alignSelf:'center'

    },
    password_textinput:{
      width:"70%",
      height:'100%',
      color:ThemeColors.white,
      paddingLeft:20,
      fontWeight:'bold'


    },
    Passwordeye_img_view:{
      height:'100%',
      width:'15%',
      justifyContent:"center",
      alignItems:'center',
      alignSelf:'center'


      
   }
,
    forgot_pass_text:{
      color:ThemeColors.white,
      marginTop:10,
      fontSize:12,
      flexDirection:'row',
      
      width:110
      
      
      
    },
    loginbtn:{
      backgroundColor:ThemeColors.secondry,
      width:width-48,
      height:50,
      borderRadius:15,
      justifyContent:'center',
      alignSelf:"center",
      marginTop:10
    },
    login_txt:{
      color:ThemeColors.white,
      height:18,
      width:'100%',
      textAlign:'center',
      fontWeight:'bold'
    },
    or_view:{
      width:width-48,
      height:90,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      alignSelf:'center'
   
    },
    or_txt:{

      color:ThemeColors.white,
      marginRight:10,
      marginLeft:10,
      fontWeight:'bold',
      fontSize:10
    },
    
    ortxt_left_view:{
      
      width:155,
      height:1,
      backgroundColor:ThemeColors.primary_lite_border,
      
    },
    ortxt_right_view:{
      width:155,
      height:1,
      backgroundColor:ThemeColors.primary_lite_border,
    },
    loginwith_txt:{
      color:ThemeColors.white,
      fontSize:20,
      fontSize:12,
      alignSelf:'center'
    },
    login_with_google_facbook_view:{
     marginTop:20,
      flexDirection:'row',
      justifyContent:'center',
      alignSelf:'center'
     
      
    },googleimg:{
      marginRight:20
    },
    facbookimg:{
      marginLeft:20
    },
    
    textcontainer2:{
      height:40,
      marginTop:30,
      justifyContent:"center",
      backgroundColor:'red',
      alignSelf:'center',
      

       },

    dont_have_account_text:{
      color:ThemeColors.white,
    
    },
    register_text:{
      color:ThemeColors.secondry,
      fontWeight:'bold',
     
      
    },
    dontHaveAccounbt_touchableopactity:{
      width:width-184,
      
    },
    textContainer:{
      flexDirection:'row',
      justifyContent:"center",
      alignSelf:'center',
      marginTop:30,
      marginBottom:10
      
    }
    }
)
export default styles