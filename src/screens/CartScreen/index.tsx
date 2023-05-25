import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import productsFastecza from "../../../assets/productsFastecza";
import CardItem from "../../components/CardItem";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import ProductItem from "../../components/CategoryandTypeFiltering/CategoryandTypeIlaclar/ProductItem"
import cartItems from "../../Redux/Reducers/cartItem";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");
function index({cartItems} : {cartItems : {product : Product,quantity : number}[]}) {
  const [totalPrice,setTotalPrice] = useState<number>(0)
   const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach(item=>{
      total += (item.product.fiyatIndirimli)
      setTotalPrice(total)
    })
    cartItems.length ? null :setTotalPrice(0)
   } 
   useEffect(()=>{
    getProductsPrice()

   },[cartItems])

  return (
    <View style = {{flex  : 1}}>
    <ScrollView style={{ flex: 1 }} >
      <FlatList
        style={{ flex: 1 }}
        data={cartItems}
        renderItem={({ item }) => <CardItem product={item.product} quantity = {item.quantity} />}
      />
      <Text style = {{padding : 15, fontWeight : 'bold',color : '#3d0c45'}}>Önerilen Ürünler</Text>
      <ScrollView style = {{backgroundColor :'white'}} horizontal = {true} showsHorizontalScrollIndicator = {false} bounces = {true} >
        {productsFastecza.map((item,index)=>(
          <ProductItem key={index} item = {item} />
        ))}
      </ScrollView>
      
      
    </ScrollView><View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#f8f8f8",
          position : 'absolute',
          bottom : 0,
          width : '100%'

        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#3d0c45",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "f9f9f9",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
            height : height*0.06,
            borderTopRightRadius : 8,
            borderBottomRightRadius : 8,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#3d0c45" }}>
            <Text>{"\u20BA"}</Text>
            {totalPrice.toFixed(2)}
          </Text>
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
