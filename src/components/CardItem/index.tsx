import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Product } from "../../models";
import {connect} from "react-redux"
import * as actions from "../../Redux/Actions/cartActions"
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
type CartItemProps = {
  product: Product;
  quantity : number;
  removeFromCart : (product : Product) => void
};

function index({ product,quantity,removeFromCart }: CartItemProps) {
  return (
    <View
      style={{
        borderBottomWidth: 0.04,
        borderBottomColor: "lightgrey",
        height: height * 0.13,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <View style={{ alignItems: "center", flexDirection: "row",marginLeft :20}}>
        <View style = {{borderWidth : 0.4, borderColor : 'lightgrey',borderRadius : 8,padding :4}}>
        <Image
          style={{ height: height * 0.09, width: width * 0.1 }}
          source={{ uri: product.image }}
        />
        </View>
        <View style={{ paddingHorizontal: "20%" }}>
          <Text style={{ fontSize: 13, fontWeight: "600" }}>
            {product.name}
          </Text>
          <Text
            style={{
              marginTop: 3,
              fontSize: 12,
              color: "#848897",
              fontWeight: "600",
            }}
          >
            {product.miktar}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#3d0c45" }}>
            <Text>{"\u20BA"}</Text>
            {product.fiyatIndirimli}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: width * 0.2,
          borderColor: "lightgrey",
          borderWidth: 0.22,
          height: height * 0.037,
          borderRadius: 10,
          
        }}
      >
        <TouchableOpacity onPress={() => removeFromCart(product)} style={{ flex: 1,width:width*0.060, alignItems: "center" }}>
          <Text>-</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#3d0c45",
            height: height * 0.037,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
            {quantity}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>+</Text>
        </View>
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return{
    removeFromCart : (product : Product)=>
    dispatch (actions.removeFromCart(product)) 
  }
}

export default connect(null,mapDispatchToProps)(index);
