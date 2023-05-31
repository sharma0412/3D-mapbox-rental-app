import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStack from "./src/navigation/navigation";
import 'react-native-gesture-handler'


const App=()=>{
  return(
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
    
    // <Main/>
    // <MapBox/>



  )
}
export default App