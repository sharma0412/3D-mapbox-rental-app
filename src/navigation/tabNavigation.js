import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Bedroom from '../screen/Tabscreens/Bedrooms';
import Budget from '../screen/Tabscreens/Budget';
import Furnished from '../screen/Tabscreens/Furnished';


const Tab = createMaterialTopTabNavigator();


const TabNavigation=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Bedroom"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Bedroom"
        component={Bedroom}
        options={{ tabBarLabel: 'Bedroom' }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Furniture"
        component={Furnished}
        options={{ tabBarLabel: 'Furniture' }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigation
// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }