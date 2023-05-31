import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utlis";
const styles=StyleSheet.create(

    {
     container:{
        flex:1,
        backgroundColor:ThemeColors.primary,
        
     },
     logo:{
        marginTop:20,
        marginLeft:20
     },
     pic_view:{
        width:'100%',
        height:100,
        justifyContent:'center'
        
     },
     pic_circular_view:{
        borderWidth:1,
        borderColor:ThemeColors.white,
        height:102,
        width:102,
       marginTop:20,
       borderRadius:100,
       alignSelf:'center',
       marginTop:10
     },
     name:{
        color:ThemeColors.white,
        fontSize:28,
        alignSelf:'center',
        marginTop:10
     },
     mail_text:{
        color:ThemeColors.white,
        fontSize:14,
        alignSelf:'center',
        marginTop:10
     },
     number_text:{
        color:ThemeColors.white,
        fontSize:14,
        alignSelf:'center',
        marginTop:10,
       

     },
     view_container:{marginTop:20,
      width:331.9,
      height:22.7,
      alignSelf:'center',
      flexDirection:'row'
     }
    ,first_view_container:{
      width:'50%',
      height:'100%',
      flexDirection:'row',
      justifyContent:'center'
   

    },
    second_view_container:{
      width:'50%',
      height:'100%',
      justifyContent:'space-evenly',
     
      
    },
    my_rentals_text:{
      color:ThemeColors.white,
      fontSize:20,
      marginLeft:20,
      alignContent:'center'
    },
    myrentals:{
   alignItems:'center'
    },
    Rightarrow:{
    left:0
    }

    }
)
export default styles
