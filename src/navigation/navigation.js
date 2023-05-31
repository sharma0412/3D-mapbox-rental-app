import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Splash from "../screen/splash";
import Login from "../screen/login";
import Signup from "../screen/signup";
import ResetPassword from "../screen/newpassword";
import Forgotpassword from "../screen/forgotpassword";
import Profile from "../screen/profile";
import Verification from "../screen/verification";
import Entercode from "../screen/entercode";
import Home from "../screen/home";
import Favourite from "../screen/favourite";
import Main from "../screen/main";
import Mapbox from "../screen/mapbox/mapBox";
import Detail from "../screen/detailscreem";
import Chat from "../screen/chat";
const AuthStack = () => {
  const AuthScreens = createStackNavigator();
  return (
    <AuthScreens.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false , gestureEnabled:false}}>
      <AuthScreens.Screen name="Splash" component={Splash} />
      <AuthScreens.Screen name="Login" component={Login} />
      <AuthScreens.Screen name="Signup" component={Signup} />
      <AuthScreens.Screen name="ResetPassword" component={ResetPassword} />
      <AuthScreens.Screen name="ForgotPassword" component={Forgotpassword} />
      <AuthScreens.Screen name="Profile" component={Profile} />
      <AuthScreens.Screen name="Verification" component={Verification} />
      <AuthScreens.Screen name="OtpVerification" component={Entercode} />
      <AuthScreens.Screen name="Home" component={Mapbox} />
      <AuthScreens.Screen name="Favourite" component={Favourite} />
      <AuthScreens.Screen name="Main" component={Main} />
      <AuthScreens.Screen name="Detail" component={Detail} />
      <AuthScreens.Screen name="Chat" component={Chat} />

       
    </AuthScreens.Navigator>
  )

}
export default AuthStack
