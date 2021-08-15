import React from 'react';
import { Image } from 'native-base';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import MultiplierScreen from '../screens/MultiplierScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialBottomTabNavigator();

const BottombarNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad", fontSize: 20 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={20} />
            )
          }}
        />
        <Tab.Screen
          name="Multiplier"
          component={MultiplierScreen}
          options={{
            tabBarLabel: 'Multiplier',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="close" color={color} size={20} />
            )
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
             <Ionicons name="information-circle-outline" color={color} size={20} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default BottombarNavigator;