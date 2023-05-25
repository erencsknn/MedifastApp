import React, { useState,useEffect } from 'react'
import {View,Text,ActivityIndicator,ScrollView} from 'react-native'
import {Product} from '../../../models'
import  ImageCorousel from '../../../components/ImageCorousel'
import DetailBoxs from '../../../components/DetailBoxs'
import DetailProperty from '../../../components/DetailProperty'
import CardButton from '../../../components/CardButton'




function index(props) {
  const [product,setProduct] = useState<Product>()
  useEffect(() => {
    setProduct(props.route.params.product)

  },[])
  console.log('our product is', product)
  
  if(!product){
    return <ActivityIndicator color={'#3d0c45'} />
  }
 return (
   <View style = {{flex:1}}>
   <ScrollView>
    <ImageCorousel images={product?.images}/>
    <DetailBoxs price = {product.fiyatIndirimli} name= {product.name} quantity = {product.miktar}/>
    <Text style = {{paddingHorizontal:5,paddingVertical:10,color : '#808B99',fontWeight:'600',fontSize: 13}} > Detaylar</Text>
    <DetailProperty kullanim= {product.kullanim} yanetki={product.yanetkiler} icindekiler={product.icindekiler} ss1 = {product.ss}/>
    
   </ScrollView>
   <CardButton item = {product}/>
   </View>
  )
}


export default index