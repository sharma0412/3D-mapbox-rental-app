import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabNavigation from "../navigation/tabNavigation";

const TabNav =()=>{
    return(
        <NavigationContainer>
      <TabNavigation/>
      </NavigationContainer>
    
    )
}
export default TabNav