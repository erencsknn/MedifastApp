import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Image, StyleSheet,Text } from "react-native";
import CategoryFilterScreenFirsatUrün from "../screens/CategoryScreens/CategoryFilterScreenFirsatUrün"
import CategoryFilterScreenCokSatan from "../screens/CategoryScreens/CategoryFilterScreenCokSatan"
import CategoryFilterScreenMedikal from "../screens/CategoryScreens/CategoryFilterScreenMedikal"
import CategoryFilterScreenIlaclar from "../screens/CategoryScreens/CategoryFilterScreenIlaclar"

const stack = createStackNavigator();

function HomeNavigator() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#3d0c45", height: 110 },

          headerTitle: () => (
            <Image
              source={require("../../assets/medifast.png")}
              style={{ width: 100, height: 90 }}
            />
          ),
        }}
      />
      <stack.Screen
        name="CategoryDetailsFirsatUrünleri"
        component={CategoryFilterScreenFirsatUrün}
        options={{
          headerTintColor : 'white',
          headerBackTitleVisible : false,
          headerStyle: { backgroundColor: "#3d0c45", height: 100 },

          headerTitle: () => (
          <Text style = {{fontWeight : 'bold',fontSize : 16,color : 'white'}}>
            Ürünler
            </Text>
          ),
        }}
      />
      <stack.Screen
        name="CategoryDetailsCokSatan"
        component={CategoryFilterScreenCokSatan}
        options={{
          headerTintColor : 'white',
          headerBackTitleVisible : false,
          headerStyle: { backgroundColor: "#3d0c45", height: 100 },

          headerTitle: () => (
          <Text style = {{fontWeight : 'bold',fontSize : 16,color : 'white'}}>
            Ürünler
            </Text>
          ),
        }}
      />
      <stack.Screen
        name="CategoryDetailsMedikal"
        component={CategoryFilterScreenMedikal}
        options={{
          headerTintColor : 'white',
          headerBackTitleVisible : false,
          headerStyle: { backgroundColor: "#3d0c45", height: 100 },

          headerTitle: () => (
          <Text style = {{fontWeight : 'bold',fontSize : 16,color : 'white'}}>
            Ürünler
            </Text>
          ),
        }}
      />
        <stack.Screen
        name="CategoryDetailsIlaclar"
        component={CategoryFilterScreenIlaclar}
        options={{
          headerTintColor : 'white',
          headerBackTitleVisible : false,
          headerStyle: { backgroundColor: "#3d0c45", height: 100 },

          headerTitle: () => (
          <Text style = {{fontWeight : 'bold',fontSize : 16,color : 'white'}}>
            Ürünler
            </Text>
          ),
        }}
      />
    </stack.Navigator>
  );
}

export default HomeNavigator;
