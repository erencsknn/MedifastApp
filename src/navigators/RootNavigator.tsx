import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Entypo,Feather,FontAwesome ,MaterialCommunityIcons} from '@expo/vector-icons'; 
import HomeNavigator from './HomeNavigator';
import ProfileScreen from "../screens/ProfileScreen"


const Tab = createBottomTabNavigator()


function RootNavigator() {
  return (
    <Tab.Navigator
    initialRouteName='Ana Sayfa'
    screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle : {
            height : 60,
        }
    }}
    >
        <Tab.Screen
          name="AnaSayfa"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={20} color={color} />
            ),
          }}
        />
         <Tab.Screen
          name="Search"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={20} color={color} />
            ),
          }}
        />
         <Tab.Screen
          name="User"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={20} color={color} />
            ),
          }}
        />
      

    </Tab.Navigator>
  )
}

export default RootNavigator