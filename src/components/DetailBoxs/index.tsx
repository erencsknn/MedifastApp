import React from 'react'
import {View,Text,Dimensions} from 'react-native'


type DetailBoxsProps = {
    price:number,
    name : string,
    quantity: string
}
const {width,height} = Dimensions.get('window')
function index({price,name,quantity}:DetailBoxsProps) {
  return (
    <View style = {{width : '100%',alignItems:'center',backgroundColor:'white',height:height*0.15}}>
        <Text style = {{color : '#3d0c45',fontSize:15,fontWeight:'bold',marginTop:12}}>
        <Text> {"\u20BA"} </Text>
        {price}
        </Text>
        <Text style = {{fontWeight : '600',fontSize:12,marginTop:5}}>
        {name}
        </Text>
        <Text style = {{color : '#848897',fontWeight:'600',fontSize:10,marginTop:3,paddingBottom:10}}>
        {quantity}
        </Text>
    </View>
  )
}

export default index