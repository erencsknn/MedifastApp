import React from 'react'
import {Text,TouchableOpacity,Image,Dimensions} from 'react-native'


const {width,height} = Dimensions.get('window')

function index() {
  return (
   <TouchableOpacity>
    <Image style = {{width : width*0.20, height : height*0.20, borderRadius: 12, borderWidth: 0.1, borderColor: 'gray'}} source={{uri:"https://cdn.getir.com/product/5ced4830d349d10001e7055f_tr_1584536178243.jpeg"}}/>
   </TouchableOpacity>
  )
}

export default index