import React from 'react'
import { View,Text,Dimensions } from 'react-native'

function index() {

  const {width,height } = Dimensions.get('window')
  return (
    <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center', paddingHorizontal:9 ,height : height*0.075,backgroundColor : '#2b0930'}}>
        <Text style = {{fontSize:14,color:'white',fontWeight:'600'}}>
        İlaclar
        </Text>
    </View>
  )
}

export default index