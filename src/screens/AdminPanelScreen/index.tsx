import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import ProductItem from "../../components/CategoryandTypeFiltering/CategoryandTypeIlaclar/ProductItem"
import cartItems from "../../Redux/Reducers/cartItem";
import { Product } from "../../models";

import firebase from 'firebase/compat'



const { width, height } = Dimensions.get("window");


function index({cartItems} : {cartItems : {product : Product,quantity : number}[]}) {
const [name,setName] = useState("")
const [mail,setMail] = useState("")
const [uid,setUid] = useState("")
useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
    setName(user?.displayName ?? '');
    setMail(user?.email ?? '');
    setUid(user?.uid ?? '');
  });
}, []);
  
  


  

  return (
    <View style = {{width : '100%',height : '100%', padding : 20}}>
    
    <View style = {{ borderColor : '#3d0c45' , borderWidth : 5, width : 350, height : 300,flexDirection : 'column',alignItems : 'center'}}>
    <View style = {{marginBottom : 10}}>
    <Text style = {{fontSize : 20, fontWeight : "bold"}}>Siparişler</Text>
    </View>
    
      <FlatList
        style={{ flex: 1 }}
        data={cartItems}
        renderItem={({ item }) => <Text>* {item.product.name}</Text>}
      />
 
    
    

    </View>
    <View style = {{borderColor : '#3d0c45' , borderWidth : 5,width : 350 , height :  100,flexDirection : 'column',alignItems : 'center' }} >
    <View>
   <Text style={{fontSize : 15,fontWeight:'500'}}>  {name}</Text>
   <Text style={{fontSize : 15,fontWeight:'500'}}> Müşteri Mail : {mail}</Text>
   <Text style={{fontSize : 15,fontWeight:'500'}}> Müşteri Id :  {uid}</Text>
   
   </View>
   </View>
     
  
    </View>
        
      
    
  );
}

const mapStateToProps = (state) =>{
  const {cartItems} = state;
  return {
    cartItems : cartItems
  }
}



export default connect(mapStateToProps,null)(index)
