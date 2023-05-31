import { StyleSheet, Dimensions} from "react-native";
import { FONTS, ThemeColors } from "../../utlis";
const {width} = Dimensions.get("window")


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: ThemeColors.primary,
           
        },

        leftarrow: {
            marginLeft: 20, marginTop: 20
        },
        locklogoview: {
            width: '100%',
            justifyContent: 'center',
            marginTop: 50

        },
        logoview: {
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: ThemeColors.white,
            backgroundColor: ThemeColors.secondry,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        lockimg: {
            alignSelf: 'center',
        },
        forgot_pass_text: {
            color: ThemeColors.white,
            fontSize: 25,
            fontFamily: FONTS.lato_medium,
            textAlign: 'center',
            marginTop: 20
        },
        enter_email_add_text: {
            color: ThemeColors.white,
            textAlign: 'center',
            fontSize: 12,
            marginTop: 15,
            fontFamily: FONTS.laila_regular
        },
        gmail_input: {

            marginTop: 20,
            height: 50,
            width: width-48,
            borderWidth: 1,
            borderColor: ThemeColors.white,
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center'



        },
        gmail_icon_view: {

            height: '100%',
            width: '15%',
            backgroundColor: ThemeColors.secondry,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            justifyContent: "center",
            alignItems: 'center',
            alignSelf: 'center'
        }, gmail_text_input:
         {
            width: "85%",
            height: '100%',
            color: ThemeColors.white,
            paddingLeft: 20

        },submit_btn: {
            backgroundColor: ThemeColors.secondry,
            width: width-48,
            height: 50,
            borderRadius: 15,
            justifyContent: 'center',
            marginTop: 60,
            justifyContent: 'center',
            alignSelf: 'center'

        },
       submit_btn_txt: {
            alignSelf: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            color: ThemeColors.white,
            fontFamily: FONTS.lato_bold

        },
        input_view:{
            marginTop: 20,
            height: 50,
            width: width-48,
            borderWidth: 1,
            borderColor: ThemeColors.white,
            borderRadius: 15,
            flexDirection: 'row',
            alignSelf:'center'

        },icon_view:{
            height: '100%',
            width: '15%',
            backgroundColor: ThemeColors.secondry,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            justifyContent: "center",
            alignItems: 'center',
            alignSelf: 'center'


        },password_textinput:{
            width: "70%",
            height: '100%',
            color: ThemeColors.white,
            paddingLeft: 20,
            fontWeight: 'bold'

        },Passwordeye_img_view:{
            height: '100%',
            width: '15%',
            justifyContent: "center",
            alignItems: 'center',
            alignSelf: 'center'

        }
    }

)
export default styles