import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwo';
import AboutScreen from '../screens/AboutScreen';


const Tab = createMaterialTopTabNavigator();

const TopbarNavigator = () => {
  return(
    <NavigationContainer>
     <Tab.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarActiveTintColor:'blue',
         tabBarLabelStyle:{fontSize:18},
         
     }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ tabBarLabel: 'Home'}}
       />
      <Tab.Screen 
        name="Multiplier" 
        component={TabTwoScreen} 
        options={{ tabBarLabel: 'Tab Two'}}
      />
      <Tab.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ tabBarLabel: 'About'}}
      />
    </Tab.Navigator>
  </NavigationContainer>
  )
}


export default TopbarNavigator;