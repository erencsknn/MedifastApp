import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginPage";
import AdminScreen from "../screens/AdminScreen";
import UserLogIn from "../screens/UserLogIn"
import AdminPanelScreen from "../screens/AdminPanelScreen"
import { Dimensions, Image, Text,View } from "react-native";
import CategoryFilterScreenIlaclar from "../screens/CategoryScreens/CategoryFilterScreenIlaclar";
import ProductDetailsIlaclarScreen from '../screens/ProductDetailsScreens/ProductDetailsIlaclarScreen'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import {connect} from "react-redux"
import { useNavigation,getFocusedRouteNameFromRoute } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen"
import { Product } from "../models";
import * as actions from "../Redux/Actions/cartActions"
import UserSignUpScreen from "../screens/UserSignUpScreen"





const stack = createStackNavigator();
const {width,height} = Dimensions.get('window')




function HomeNavigator({cartItems,clearCart,route} : {cartItems : {product:Product , quantity : number}[],clearCart : () => void , }) {
  const navigation = useNavigation()
  const [totalPrice,setTotalPrice] = useState<number>(0)

  const tabHiddenRoutes = ["Home","UserLogIn","AdminScreen","AdminPanelScreen","UserSignUp","CartScreen","ProductDetails"];
  

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);
  
  
  const getProductsPrice = () => {
    var total =0;
    cartItems.forEach(cartItem=>{
      const price = (total += cartItem.product.fiyatIndirimli)
      setTotalPrice(price)
    })
    cartItems.length ? null : setTotalPrice(0)
  }
  useEffect(()=>{
    getProductsPrice()

  },[cartItems,navigation])



  

  return (
    
    <stack.Navigator
    
  
    >
       <stack.Screen
        name="Home"
        component={LoginScreen}
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
        name="UserHome"
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
        name="AdminScreen"
        component={AdminScreen}
        options=
        {{
          
          
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
        name="AdminPanelScreen"
        component={AdminPanelScreen}
        options={{
          headerStyle: { backgroundColor: "#3d0c45", height: 110 },
         
          

          headerTitle: () => (
            <Image
              source={require("../../assets/medifast.png")}
              style={{ width: 100, height: 90 }}
            />
          ),
        }
      
      }
      />
           <stack.Screen
        name="UserSignUp"
        component={UserSignUpScreen}
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
        name="UserLogIn"
        component={UserLogIn}
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
        name="CategoryDetailsIlaclar"
        component={CategoryFilterScreenIlaclar}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#3d0c45", height: 100 },

          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight : () =>(
           <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style = {{width : width*0.2,height : 33,backgroundColor:'white',marginRight:width*0.03,borderRadius:9,flexDirection :'row',alignItems : 'center'}}>
            <Image style = {{width : 23,height : 23, marginLeft : 6}} source={require("../../assets/cart.png")}/>
            <View style = {{flex : 1,justifyContent:'center',alignItems:'center', height : 33, borderBottomRightRadius: 9 ,backgroundColor : '#F3EFFE',borderTopRightRadius:9}}>
            <Text style = {{color : "#3d0c45", fontWeight : 'bold',fontSize :12 }}>
              <Text>{"\u20BA"}</Text> 
              {totalPrice.toFixed(2)}
            </Text>

            </View>
            
           </TouchableOpacity>
          )
        }}
      />
      <stack.Screen
        name="ProductDetails"
        component={ProductDetailsIlaclarScreen}
        options={{
          tabBarStyle : {display : "none"},
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#3d0c45", height: 100 },
          headerLeft : () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),

          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
        }}
      />
      <stack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        tabBarStyle : {display : "none"},
        headerTintColor:'white',
        headerStyle : {backgroundColor: '#3d0c45' },
        headerBackTitleVisible : false,
        headerTitle : () =>(
          <Text style = {{fontWeight : 'bold', fontSize : 15, color : 'white'}}>
          Sepetim
          </Text>
        ),
        headerLeft : () => (
          <TouchableOpacity style = {{paddingLeft : 10}} onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={26} color="white" />

          </TouchableOpacity>
        ),
        headerRight : () => (
          <TouchableOpacity onPress={() => clearCart()} style = {{paddingRight : 10}}>
            <Ionicons name="trash" size={24} color="white" />
          </TouchableOpacity>
        )

      }}
      />
     

      
     
    </stack.Navigator>
  );
}


const mapStateToProps = (state) =>{
  const {cartItems} = state
  return {
    cartItems : cartItems
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    clearCart : () => dispatch(actions.clearCart()) 
  }
}

 export default  connect(mapStateToProps,mapDispatchToProps)(HomeNavigator)



