import React from 'react'
import {View,Text,Dimensions,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import * as actions from "../../Redux/Actions/cartActions"
import { Product } from '../../models'
const {width,height} = Dimensions.get('window')
type cartButtonType = { 
  addItemToCart :(a : Product) => void;
  item : Product


}

function index({item,addItemToCart} : cartButtonType) {
  return (
    <TouchableOpacity onPress={() => addItemToCart(item)} style = {{width : '100%', height : height*0.13, backgroundColor : 'white'}}>
      <View style = {{position :'absolute',bottom:0,height : height*0.09, width : '90%',backgroundColor:'#3d0c45',marginHorizontal : '5%',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
        <Text style = {{fontWeight:'bold',color : 'white',fontSize : 14}}>Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart : (product : Product)=>
    dispatch(actions.addToCart({quantitiy : 1,product}))
  }
}

export default connect(null, mapDispatchToProps)(index)