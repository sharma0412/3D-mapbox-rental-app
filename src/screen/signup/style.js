import { StyleSheet, Dimensions } from "react-native";
import { ThemeColors } from "../../utlis";
import { FONTS } from "../../utlis";
const { width } = Dimensions.get("window")
const styles = StyleSheet.create(
    {

        container: {
            flex: 1,
            backgroundColor: ThemeColors.primary,
            alignItems: 'center',

        },
        logoicon: {
            marginTop: 50,
            alignSelf: 'center'
        },
        textContainer: {
            flexDirection: 'row',
            alignSelf: "center",
            fontSize: 25,
            marginTop: 30
        },
        create_new_acc_text: {
            alignSelf: 'center',
            color: ThemeColors.white
        },
        account_text: {
            color: ThemeColors.secondry
        },
        radio_btn_view: {
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center'
        },
        second_radio_btn: {
            marginLeft: 30
        },
        agent_text: {
            color: ThemeColors.white,
            marginLeft: 10,
            fontSize: 12
        },
        input_view: {
            marginTop: 20,
            height: 50,
            width: width - 48,
            borderWidth: 1,
            borderColor: ThemeColors.white,
            borderRadius: 15,
            flexDirection: 'row'

        },


        icon_view: {
            height: '100%',
            width: '15%',
            backgroundColor: ThemeColors.secondry,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            justifyContent: "center",
            alignItems: 'center',
            alignSelf: 'center'


        },
        password_input: {
            marginTop: 20,
            height: 50,
            width: width - 48,
            borderWidth: 1,
            borderColor: ThemeColors.white,
            borderRadius: 15,
            flexDirection: 'row'

        },
        textinput: {
            width: "85%",
            height: '100%',
            color: ThemeColors.white,
            paddingLeft: 20

        },

        password_textinput: {
            width: "70%",
            height: '100%',
            color: ThemeColors.white,
            paddingLeft: 20,
            fontWeight: 'bold'
        },
        Passwordeye_img_view: {
            height: '100%',
            width: '15%',
            justifyContent: "center",
            alignItems: 'center',
            alignSelf: 'center'
        },
        Register_btn: {
            marginTop: 40,
            backgroundColor: ThemeColors.secondry,
            width: width - 48,
            height: 50,
            borderRadius: 15,
            justifyContent: 'center'
        },
        Register_text: {
            color: ThemeColors.white,
            height: 18,
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',


        },
        checkbox_text_container: {
            flexDirection: 'row',
            marginTop: 30,
            justifyContent:'center'

        },
        accept_text: {
            color: ThemeColors.white,
            fontSize: 12,
            fontWeight: 'bold',
            justifyContent:'center',
            marginStart:10,
            alignSelf:'center'
        },
        dont_have_acc_text: {
            color: ThemeColors.white,
            fontSize: 12,
            marginTop: 50,
            alignSelf: 'center',
            marginBottom: 30
        },
        name_textinput: {
            color: ThemeColors.white
        },
        gmail_textimput: {
            color: ThemeColors.white
        },
        textcontainer2:{
            width:'100%',
            height:40,
            textAlign:'center',
            marginTop:30
          
             },
      
          dont_have_account_text:{
            color:ThemeColors.white,
          },
          register_text:{
            color:ThemeColors.secondry,
            fontWeight:'bold',
            
          },
          checkbox: {
            alignSelf: "left",
          },
          textContainer2:{
            flexDirection:'row',
            justifyContent:'center',
            alignSelf:'center',
            marginTop:20,
            marginBottom:20
          },
          alreadyHaveText:{
            color:ThemeColors.white
          },
          loginText:{
            color:ThemeColors.secondry
          }
    }
)
export default styles