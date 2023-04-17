import React from 'react'
import {Text,TouchableOpacity,Image,Dimensions,View} from 'react-native'
import productsFastecza from '../../../../../assets/productsFastecza'
import { Entypo } from "@expo/vector-icons"
import { Product } from '../../../../models'

const {width,height} = Dimensions.get('window')

type productIİtemType = {
  item : Product
}

function index({item} : productIİtemType) {
  return (
   <TouchableOpacity style ={{width : width*0.28,marginTop:12,height : height*0.25,marginLeft:12,marginBottom:10,}}>
    <Image style = {{width : width*0.20, height : height*0.15, borderRadius: 12, borderWidth: 0.1, borderColor: 'gray'}} source={{uri:item.image}}/>
   <View style = {{flexDirection:'row',marginTop:10,alignItems:'center'}}>
    <Text style = {{fontSize : 11.4,color : "#747990",textDecorationLine: 'line-through'}}>
      <Text>{"\u20BA"}</Text>{item.fiyat}
    </Text>
    <Text style = {{fontSize : 12,color : "#5D3EBD",fontWeight:'bold',marginLeft:4}}>
      <Text>{"\u20BA"}</Text> {item.fiyatIndirimli}
    </Text>
   </View>
   <Text style = {{fontSize : 10,fontWeight : '600',marginTop:5}}>
    {item.name}
   </Text>
   <Text style = {{color : '#747990',fontSize : 12, marginTop : 4,fontWeight : '500'}}>{item.miktar}</Text>
   <View style = {{ alignItems : 'center', justifyContent : 'center',shadowRadius:3.8,shadowOpacity:0.05,width : 30 , height : 30, borderWidth : 0.3, borderColor : 'lightgrey',backgroundColor : 'white', position : 'absolute',right : -6,top:-6,borderRadius:6}}>
   <Entypo name = 'plus' size={22} color = '#5D3EBD' />
   </View>
   </TouchableOpacity>
  )
}

export default index